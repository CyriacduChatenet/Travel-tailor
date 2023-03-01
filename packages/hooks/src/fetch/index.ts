import { AccessToken } from "@travel-tailor/types";

export class UseFetchHook {
	get = async (api_url: string) => {
		const response = await fetch(api_url, {
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
			},
			method: 'GET',
		});

        return await response.json();
	};

	protectedGet = async (api_url: string, token: AccessToken) => {
		const response = await fetch(api_url, {
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			method: 'GET',
		});

        return await response.json();
	};

	post = async (api_url: string, body: Object) => {
        const response = await fetch(api_url, {
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json'
			},
			method: 'POST',
            body: JSON.stringify(body!)
		});

        return await response.json();
    };

	protectedPost = async (api_url: string, body: Object,  token: AccessToken) => {
        const response = await fetch(api_url, {
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			method: 'POST',
            body: JSON.stringify(body!)
		});

        return await response.json();
    };

	patch = async (api_url: string, body: Object) => {
        const response = await fetch(api_url, {
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
			},
			method: 'PATCH',
            body: JSON.stringify(body)
		});

        return await response.json();
    };

	protectedPatch = async (api_url: string, body: Object,  token: AccessToken) => {
        const response = await fetch(api_url, {
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			method: 'PATCH',
            body: JSON.stringify(body)
		});

        return await response.json();
    };

	delete = async (api_url: string) => {
        const response = await fetch(api_url, {
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
			},
			method: 'DELETE'
		});

        return await response.json();
    };

	protectedDelete = async (api_url: string, token: AccessToken) => {
        const response = await fetch(api_url, {
			headers: {
				ContentType: 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			method: 'DELETE'
		});

        return await response.json();
    };
}