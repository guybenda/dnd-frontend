import { API_URL } from "./utils";

export class WSGameClient {
	static connect(gameId: string, userId: string) {
        console.log({gameId, userId})

		const ws = new WebSocket(API_URL.replace("http", "ws"));

		ws.onopen = (e) => {
			console.log("connected", e,ws);
		};

		ws.onmessage= e => {
			console.log("message", e.data);
		};

		ws.onclose = (code, data) => {
			console.log("closed", code, data.toString());
		});
	}
}
