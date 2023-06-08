const Axios = require('axios');
var fs = require('fs');

const URL = 'https://api.disneyapi.dev/characters?page=';

const getBatch = async (index) => Axios.get(URL + index.toString())

const pepe = async () => {

  let array = [];

  for(let i=14; i < 151; i++){
    const batch = await getBatch(i);
  
    array = [...array, ...batch.data.data]
    console.log('====> array', array.length);
  }
  
  console.log('====> Saving to file');
  var json = JSON.stringify(array);
  fs.writeFile('myjsonfile.json', json,  function(err, result) {
    if(err) console.log('error', err);
  });
};

pepe();

