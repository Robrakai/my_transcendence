import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="p-5">
      	<Link to="/" className="text-base text-xl font-arcade z-50">ft_transcendence</Link>

		<div>
			<input type="checkbox" id="menu-toggle" className="hidden peer"></input> {/*Checkbox ()*/}

			<label htmlFor="menu-toggle"
				className="p-3 px-4 m-2 bg-gray-800 text-2xl text-white rounded-md cursor-pointer absolute bottom-10 left-5 z-40 scale-125 transition duration-300 hover:rotate-90">
				☰
			</label> {/*bouton carre menu*/}

			<label htmlFor="menu-toggle"
				className="absolute top-0 left-0 h-full w-10 cursor-pointer bg-transparent z-50">
			</label> {/*Bouton bord d ecran*/}

			<label htmlFor="menu-toggle"
				className="fixed inset-0 bg-black/50 hidden peer-checked:block z-40">
			</label>

			<div className="fixed top-25 bottom-40 left-8 w-40 bg-gradient-to-b from-violet-500/50 to-fuchsia-500/50 rounded-xl shadow-md transform -translate-x-full transition-transform duration-300 peer-checked:translate-x-0 z-40">
				<nav className="flex flex-col my-35 space-y-15 justify-items-center auto-cols-auto	">

					<Link to="/" className="flex p-1 mx-1 text-orange-300/80 font-arcade text-xl justify-center hover:scale-110 hover:shadow-xl transition">Home</Link>
					<Link to="/test" className="flex p-1 text-orange-300/80 font-arcade text-xl justify-center hover:scale-110 hover:shadow-xl transition">Test</Link>
					<Link to="/Profile" className="flex p-1 text-orange-300/80 font-arcade text-xl justify-center hover:scale-110 hover:shadow-xl transition">Profile</Link>
					<Link to="/ladder" className="flex p-1 text-orange-300/80 font-arcade text-xl justify-center hover:scale-110 hover:shadow-xl transition">Ladder</Link>
				</nav>
			</div>
		</div>

		<canvas id="pongCanvas" width="1800" height="900" className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/50 to-blue-500/50 z-1"></canvas>
		<script type="module" src="./../../Game/main"></script>


		<div className="absolute top-10 right-20 z-10">
			<Button onClick={() => alert("Hello !")} />
		</div>

		<div className="flex flex-col items-center justify-center h-screen">
			<input id="welcome" type="checkbox" className="peer hidden"/> {/*checkbox*/}
			<label htmlFor="welcome" className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer z-45 transition-opacity peer-checked: peer-checked:z-0"></label> {/*bouton */}

			<div className="fixed inset-0 bg-black/60 peer-checked:hidden transition z-40"></div>

			<a className="text-base text-2xl text-[#6fc8dc] translate-y-50 font-arcade transition-transform duration-1700 peer-checked:-translate-y-400 z-45">W E L C O M E</a>
			<Link to="/game" className="flex rounded-full items-center translate-y-200 justify-center w-128 z-10 transition ease-in-out  bg-pink-200 font-bold p-5 shadow-2xl text-white text-2xl font-arcade dark:bg-black-950  hover:bg-yellow-500 hover:italic hover:text-white-500 hover:shadow-inner hover:outline hover:ouline-4 hover:scale-110 hover:outline-cyan-500 hover:backdrop-blur  transition-transform duration-1700 peer-checked:translate-y-50"> PLAY </Link>
		</div>
	</div>
	)
}

export default Home
