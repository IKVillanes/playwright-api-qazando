// @ts-check
const { test, expect, request } = require('@playwright/test');

var tokenReceived

test('Atualizando dados de uma reserva', async ({request}) => {
  const response = await request.post('/auth', {
    data: {
      "username" : "admin",
      "password" : "password123"
    }
  });

  console.log(await response.json());
  //validando se a reposta do API westa ok
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const respondeBody = await response.json();
  tokenReceived = respondeBody.token;

  console.log("seu token e: " + tokenReceived);


  //Atualizando os dados da reserva

  const partialUpdateRequest = await request.patch('/booking/1175', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': `token=${tokenReceived}`
    },
  
  data: {
      "firstname": "Milo",
      "lastname": "Santos",
      "totalprice": 898,
      "depositpaid": true
  }

  });
  console.log(await partialUpdateRequest.json());

    //validando se a reposta do API westa ok
expect(response.ok()).toBeTruthy();
expect(response.status()).toBe(200);

const partialUpdatedResponseBody = await partialUpdateRequest.json()
expect(partialUpdatedResponseBody).toHaveProperty("firstname", "Milo");
expect(partialUpdatedResponseBody).toHaveProperty("lastname", "Santos");
expect(partialUpdatedResponseBody).toHaveProperty("totalprice", 898);
expect(partialUpdatedResponseBody).toHaveProperty("depositpaid", true);
  
})


