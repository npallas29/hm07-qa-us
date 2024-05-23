// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"products": [
		{
			"id": 5,
			"quantity": 1
		},
		{
			"id": 4,
			"quantity": 5
		}
	]
}

// This first POST test checks that the response status returns code 200
test('Status code should be 200', async () => {
    let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatusCode = response.status
		console.log(actualStatusCode)
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200);
});

// This second POST test checks that the boolean in the response body of the specific warehouse is 'true'
test('Check for boolean response to be true', async () => {
    let actualResponseBody
	let everythingYouNeed
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json()
		everythingYouNeed = actualResponseBody['Everything You Need']
	} catch (error) {
		console.error(error);
	}
	expect(everythingYouNeed['Sprite Soft Drink']).toBe(true)
});
