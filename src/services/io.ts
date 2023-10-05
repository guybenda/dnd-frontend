import {
	ClientToServerEvents,
	IDiceExpression,
	ServerToClientEvents,
} from "dnd-common";
import { Socket, io } from "socket.io-client";
import { API_URL } from "./utils";

const WS_URL = API_URL.replace("http", "ws");

type DndSocketType = Socket<ServerToClientEvents, ClientToServerEvents>;

export class GameManager {
	io: DndSocketType;

	constructor(userId: string, gameId: string) {
		this.io = io(WS_URL, { auth: { userId, gameId } });

		this.io.on("rollResult", (name, id, result) => {
			console.log(name, id, result);
		});
	}

	roll(name: string, id: string, dice: IDiceExpression, broadcast: boolean) {
		this.io.emit("roll", name, id, dice, broadcast);
	}
}
