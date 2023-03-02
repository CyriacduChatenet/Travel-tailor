export class useFetchHook {
	async get(api_url: string) {
		const response = await fetch(api_url, {
			method: 'GET',
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
			},
		});
        const responseJSON = await response.json();
        return responseJSON;
	}

	async protectedGet(api_url: string, token: string) {
        const response = await fetch(api_url, {
			method: 'GET',
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
                Authorization: `Bearer ${token}`,
			},
		});
        const responseJSON = await response.json();
        return responseJSON;
    }

	async post(api_url: string, body: Object) {
        const response = await fetch(api_url, {
			method: 'POST',
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
			},
            body: JSON.stringify(body),
		});
        const responseJSON = await response.json();
        return responseJSON;
    }

	async protectedPost(api_url: string, body: Object, token: string) {
        const response = await fetch(api_url, {
			method: 'POST',
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
                Authorization: `Bearer ${token}`,
			},
            body: JSON.stringify(body),
		});
        const responseJSON = await response.json();
        return responseJSON;
    }

	async patch(api_url: string, body: Object) {
        const response = await fetch(api_url, {
			method: 'PATCH',
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
			},
            body: JSON.stringify(body),
		});
        const responseJSON = await response.json();
        return responseJSON;
    }

	async protectedPatch(api_url: string, body: Object, token: string) {
        const response = await fetch(api_url, {
			method: 'PATCH',
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
                Authorization: `Bearer ${token}`,
			},
            body: JSON.stringify(body),
		});
        const responseJSON = await response.json();
        return responseJSON;
    }

	async delete(api_url: string) {
        const response = await fetch(api_url, {
			method: 'DELETE',
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
			},
		});
        const responseJSON = await response.json();
        return responseJSON;
    }

	async protectedDelete(api_url: string, token: string) {
        const response = await fetch(api_url, {
			method: 'DELETE',
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
                Authorization: `Bearer ${token}`,
			},
		});
        const responseJSON = await response.json();
        return responseJSON;
    }
}
