const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
let port = process.env.PORT || 3000
app.use(serveStatic(__dirname + "/public"))

app.listen(port);
console.log('listenting on port', port);
