fetch("stork.json")
 .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
      console.log(jsonData);
});