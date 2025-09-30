import { useEffect, useRef } from "react";
import { Engine, Scene, HemisphericLight, MeshBuilder, Vector3, FreeCamera } from "@babylonjs/core";


export default function BabylonScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Créer le moteur et la scène
    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);

	var sphere = MeshBuilder.CreateSphere("sphere", { diameterX: 1, diameterY: 1, diameterZ: 1 }, scene);

	const camera = new FreeCamera("camera", new Vector3(0, 10, 20), scene);

	camera.setTarget(sphere.position);
	camera.attachControl(true);

    // Lumière
    new HemisphericLight("light", new Vector3(10, 1, 10), scene);

	var box = MeshBuilder.CreateBox("box", {width: 1, height: 3, depth: 4 }, scene);
	box.position = new Vector3(16, 0, 0);
	camera.lockedTarget = sphere; //version 2.5 onwards

	var alpha = 0;
	var orbit_radius = 20

	scene.registerBeforeRender(function () {
     alpha +=0.01;
	 sphere.position.x = orbit_radius*Math.cos(alpha);
	 sphere.position.y = 2;
	//  orbit_radius*Math.sin(alpha);
	 sphere.position.z = 0;
	//  10*Math.sin(2*alpha);
    });

    // Boucle de rendu
    engine.runRenderLoop(() => {
      scene.render();
    });

	var ground = MeshBuilder.CreateGround("ground", {width: 40, height: 16}, scene);


    // Nettoyage quand le composant est démonté
    return () => {
      engine.stopRenderLoop();
      engine.dispose();
    };
  }, []);



  return <canvas ref={canvasRef} className="p-10 w-full h-screen" />;
}
