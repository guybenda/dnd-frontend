import "./App.css";
import { WSGameClient } from "./services/ws";

function App() {
	return (
		<>
			<div>
				<button
					onClick={() => {
						WSGameClient.connect("123", "456");
					}}
				>
					Connect
				</button>
			</div>
		</>
	);
}

export default App;
