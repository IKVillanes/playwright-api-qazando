// @ts-check
const { test, expect, request } = require('@playwright/test');


test('consultando reservas cadastradas', async ({ request }) => {

  const response = await request.get('/booking');
  console.log(await response.json())

  expect(response.ok()).toBeTruthy()
  expect(response.status()).toBe(200)
});

test('consultar reserva com base em id e validar os dados dos campos', async ({request}) => {
  const response = await request.get('/booking/56');
  const jsonBody = await response.json()
  console.log(jsonBody)

  expect(jsonBody.firstname).toBe('Jane');
  expect(jsonBody.lastname).toBe('Doe');
  expect(jsonBody.totalprice).toBe(111);
  expect(jsonBody.depositpaid).toBeTruthy;
  expect(jsonBody.bookingdates.checkin).toBe('2018-01-01');
  expect(jsonBody.bookingdates.checkout).toBe('2019-01-01');
  expect(jsonBody.additionalneeds).toBe('Extra pillows please');

  expect(response.ok()).toBeTruthy()
  expect(response.status()).toBe(200)
})

test('consultar reserva com base em id e validar os campos', async ({request}) => {
  const response = await request.get('/booking/56');
  const jsonBody = await response.json()
  console.log(jsonBody)

  expect(jsonBody).toHaveProperty('firstname');
  expect(jsonBody).toHaveProperty('lastname');
  expect(jsonBody).toHaveProperty('totalprice');
  expect(jsonBody).toHaveProperty('depositpaid');
  expect(jsonBody).toHaveProperty('bookingdates');
  expect(jsonBody).toHaveProperty('additionalneeds');

  expect(response.ok()).toBeTruthy()
  expect(response.status()).toBe(200)
})
