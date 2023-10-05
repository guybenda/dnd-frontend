import { Die, StandardDice } from "dnd-common";
import "./App.css";
import { gameService } from "./services/game";
import { GameManager } from "./services/io";

const game = new GameManager("123", "WRUta9rLAvpORfvePON1");

function App() {
	return (
		<>
			<div>
				<button
					onClick={() => {
						game.roll(
							"asd",
							"678",
							{ dice: [Die.fromStandardDie(StandardDice.d20, 5)] },
							true
						);
					}}
				>
					Send
				</button>
			</div>
		</>
	);
}

export default App;

console.log(gameService);
