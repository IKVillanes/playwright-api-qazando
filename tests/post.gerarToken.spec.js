// @ts-check
const { test, expect, request } = require('@playwright/test');

var tokenReceived

test('gerando un token @regressivo', async ({request}) => {
  const response = await request.post('/auth', {
    data: {
      "username" : "admin2",
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


})


