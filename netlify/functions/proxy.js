const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { keyword = 'a', startRows = '0', maxRows = '10' } = event.queryStringParameters || {};

  const url = `https://games.roblox.com/v1/games/list?keyword=${keyword}&startRows=${startRows}&maxRows=${maxRows}&sortOrder=Asc`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
