var cm = require('contentful-management')

let accessToken = 'token';
let httpsProxyAgent = require('https-proxy-agent');


let options = {
  accessToken: accessToken
};

if (process.env.http_proxy) {
  console.log('contentful management api is using http_proxy');
  options.httpsAgent = new httpsProxyAgent(process.env.https_proxy);
  // options.proxy = new httpsProxyAgent(process.env.http_proxy); 
  // options.httpAgent = new httpsProxyAgent(process.env.http_proxy); 
}

let client = cm.createClient(options);
console.log(options)

client.getSpaces().then(spaces => {
  console.log(spaces)
  let spaceId = 'space';

  client.getSpace(spaceId)
  .then((space) => {
    let requests = [];
    this.space = space;
    console.log(space)
  });
}).catch((err) => console.log(err));
