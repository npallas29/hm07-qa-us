// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"name": "Modified"
}

// This first PUT test checks that the response status returns code 200
test('Status code should be 200', async () => {
    let actualStatusCode
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});

// This second PUT test checks that a specific key and value pair are present in the response body
test('Check for "ok": true in response body', async () => {
    let actualResponseBody
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true)
});