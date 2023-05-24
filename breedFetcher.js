const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      try {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback("Breed not found", null);
        } else {
          const firstEntry = data[0];
          const description = firstEntry.description;
          callback(null, description);
        }
      } catch (parseError) {
        callback(parseError, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
