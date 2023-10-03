export const API_URL = import.meta.env.VITE_API as string;

export const requests = {
	async get(url: string, options?: RequestInit) {
		const response = await fetch(`${API_URL}${url}`, {
			method: "GET",
			...options,
		});

		return await response.json();
	},

	async post(url: string, body: any, options?: RequestInit) {
		const response = await fetch(`${API_URL}${url}`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
			...options,
		});

		return await response.json();
	},

	async put(url: string, body: any, options?: RequestInit) {
		const response = await fetch(`${API_URL}${url}`, {
			method: "PUT",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
			},
			...options,
		});

		return await response.json();
	},

	async delete(url: string, options?: RequestInit) {
		const response = await fetch(`${API_URL}${url}`, {
			method: "DELETE",
			...options,
		});

		return await response.json();
	},
} as const;
