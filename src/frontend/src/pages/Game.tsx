import { Link } from "react-router-dom"
import BabylonScene from "../../Game/Game";

function Game() {
  return (
	<div className="bg-gradient-to-r from-cyan-500/50 to-blue-500/50">

		<Link to="/" className="text-base text-xl font-arcade">ft_transcendence</Link>

      <BabylonScene />

		  <Link to="/" className="flex p-1 mx-1 text-orange-300/80 font-arcade text-xl justify-center hover:scale-110 hover:shadow-xl transition">Home</Link>
	</div>
  )
}

export default Game
