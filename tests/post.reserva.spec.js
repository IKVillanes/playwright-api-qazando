// @ts-check
const { test, expect, request } = require('@playwright/test');


test('cadastrar uma reserva', async ({request}) => {
  const response = await request.post('/booking', {
    data: {
      "firstname" : "Isa",
      "lastname" : "rojas",
      "totalprice" : 789,
      "depositpaid" : true,
      "bookingdates" : {
          "checkin" : "2023-01-01",
          "checkout" : "2024-01-01"
      },
      "additionalneeds" : "Breakfast"
    }
  });
  console.log(await response.json());
  //validando se a reposta do API westa ok
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  //validando dados de retorno
  const responseBody = await response.json();
  expect(responseBody.booking).toHaveProperty('firstname');
  expect(responseBody.booking).toHaveProperty('lastname');
  expect(responseBody.booking).toHaveProperty('totalprice');
  expect(responseBody.booking).toHaveProperty('depositpaid');
  expect(responseBody.booking).toHaveProperty('bookingdates');
  expect(responseBody.booking).toHaveProperty('additionalneeds');


})


