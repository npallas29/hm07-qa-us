// eslint-disable-next-line no-undef
const config = require('../config');

//This first DELETE test checks that deleting an existing order returns a 200 status code
test('Status code should be 200', async () => {
    let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});

// This second DELETE test checks that the ressponse body contains an 'ok' key with a value of 'true'
test('Check for "ok": true in response body', async () => {
    let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
		actualResponseBody = await response.json()
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["ok"]).toBe(true)
});
