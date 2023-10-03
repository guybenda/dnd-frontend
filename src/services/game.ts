import { Game } from "dnd-common";
import { requests } from "./utils";

const URL = `/games`;

export const gameService = {
	createGame(game: Omit<Game, "id">) {
		return requests.post(URL, game);
	},
} as const;
