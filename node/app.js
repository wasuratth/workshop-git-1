const fetch = require('node-fetch');

// fetchUrl('https://randomuser.me/api' , function(err , json){
//   console.log(json)
//   console.log(json.status)
//   console.log(json)
// });

async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json() 
    console.log(response.status)
      
  } catch (err) {
    console.log(err)
  }
}
getUser();
 