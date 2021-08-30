const http = require('http');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const fs = require('fs');
// test
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const onRequest = (request, response) => {
  console.log(request.url);

  response.writeHead(200, { 'Content-type': 'text/html' });
  response.write(index);
  response.end();
};
http.createServer(onRequest).listen(port);
console.log(`listening to local host: ${port}`);
