const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);

    if (data.length === 0){
      console.log("breed not found");
    } else {
    const firstEntry = data[0];
    const description = firstEntry.description;
    console.log("Description:", description);
    }
  }
});
