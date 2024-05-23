// eslint-disable-next-line no-undef
const config = require('../config');

// THis first GET test checks that the response body of the requested data contains a specific warehouse
test('Checking for specific warehouse "Everything You Need"', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualResponseBody = await response.json();	
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody[0]['name']).toContain('Everything You Need')
});

// This second GET test checks that the status of the request return a code of 200
test('Status code should be 200', async () => {
	let actualStatusCode;
	try{
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatusCode = response.status;
		console.log(actualStatusCode);
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
})