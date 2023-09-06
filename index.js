// 1. Import express
const express = require("express");

// 2. Create server instance
const app = express();

// 3. Route declaration
// GET, POST, PUT, PATCH, DELETE, OPTION, HEAD, TRACE, CONNECT...
// To register a route
// http://localhost:8080
// instance.method(route, handler)
app.get( "/", function ( request, response ) {
   // send() is write() and end() in a one single instruction
   response.send("Hello World!")
});

// 4. Listen a port
app.listen(8080, function() {
   console.log("> Listening port  8080");
})

app.get( '/about', function(request, response) {
   response.sendFile( `${__dirname}/viejo-servidor/about.html`);
} )

app.get( '*', function(request, response) {
   response.sendFile( `${__dirname}/viejo-servidor/404.html`);
} )
