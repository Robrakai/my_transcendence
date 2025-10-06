import { useEffect, useRef } from "react";
import { Engine, Scene, HemisphericLight, MeshBuilder, Vector3, FreeCamera, StandardMaterial, Color4, PhysicsImpostor } from "@babylonjs/core";
import * as BABYLON from "@babylonjs/core";
import HavokPhysics from "@babylonjs/havok";

const havokInstance = await HavokPhysics(); // charge le module WebAssembly

export default function BabylonScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);


  useEffect(() => {
	  if (!canvasRef.current) return;


	  // Créer le moteur et la scène
	const hk = new BABYLON.HavokPlugin(true, havokInstance);
    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);
	scene.enablePhysics(new Vector3(0, 0, 0), hk);
	scene.clearColor = new Color4(0, 0, 0, 0);

	//create sphere
	var sphere = MeshBuilder.CreateSphere("sphere", { diameterX: 1, diameterY: 1, diameterZ: 1 }, scene);
	sphere.position.y = 0.5;
	sphere.physicsImpostor = new PhysicsImpostor(sphere, PhysicsImpostor.SphereImpostor, { mass: 1, restitution: 1 }, scene);


	//create speed
	let velocity = new Vector3(-0.05, 0, 0.05);

	//create camera
	const camera = new FreeCamera("camera", new Vector3(0, 12, 25), scene);
	camera.setTarget(sphere.position);
	camera.attachControl(true);
	// camera.lockedTarget = sphere; //version 2.5 onwards

    //create Lumière
    new HemisphericLight("light", new Vector3(10, 1, 10), scene);

	//create ground
	MeshBuilder.CreateGround("ground", {width: 40, height: 16}, scene);

	// create Wall
	const wallMaterial = new StandardMaterial("wallMat", scene);
	const invisWall = new StandardMaterial("wallMat", scene);
	wallMaterial.alpha = 0.2;
	invisWall.alpha = 0;

	const backWall = MeshBuilder.CreateBox("backWall", { width: 40, height: 5, depth: 0.1 }, scene);
	const frontWall = MeshBuilder.CreateBox("frontWall", { width: 40, height: 2, depth: 0.1 }, scene);
	backWall.position.z = -8;
	backWall.position.y = 1;
	frontWall.position.z = 8;
	frontWall.position.y = 1;
	frontWall.material = invisWall;

	frontWall.physicsImpostor = new PhysicsImpostor(frontWall, PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 1 }, scene);
	backWall.physicsImpostor = new PhysicsImpostor(backWall, PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 1 }, scene);

	//create box
	var box = MeshBuilder.CreateBox("box", {width: 0.4, height: 3, depth: 4 }, scene);
	box.position = new Vector3(16, 0, 0);

		scene.onBeforeRenderObservable.add(() => {
	sphere.position.addInPlace(velocity);

	// Vérifie les collisions avec les murs
	if (sphere.intersectsMesh(frontWall, true) || sphere.intersectsMesh(backWall, true)) {
		velocity.x *= -1;
		// velocity.z *= -1; // inversion verticale
	}
	});

    // Boucle de rendu
    engine.runRenderLoop(() => {
      scene.render();
    });



    // Nettoyage quand le composant est démonté
    return () => {
      engine.stopRenderLoop();
      engine.dispose();
    };
  }, []);



  return <canvas ref={canvasRef} className="p-10 w-full h-screen" />;
}
