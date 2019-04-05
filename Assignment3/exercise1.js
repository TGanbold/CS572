// use dnscore module, resolve4()

var dns = require('dns');
var w3 = dns.lookup('www.mum.edu', function (err, addresses, family) {
  console.log(addresses);
  
});

//rewriting the code above and convert the callback function to a promise object.

(()=>{
  const {resolve4} = require('dns');
  const {promisify} = require('util');
  const hostname = 'www.mum.edu';
  const new_resolve4 = promisify(resolve4);
  console.log('2 Start');
  new_resolve4(hostname)
      .then((data)=>{console.log('2 DNS resolved with Promise: ',data[0])})
      .catch((err)=>{console.log(err)});    
  console.log('2 End');
})();

//Async await

async function resolve4AsyncWait() {
  try {
      const addresses = await resolve4Async("www.mum.edu");
      console.log(addresses[0]);
  } catch (err) {
      console.error(err);
  }
}
resolve4AsyncWait();


