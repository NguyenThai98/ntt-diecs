const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app = express();
let port = process.env.PORT || 3000
app.use('/', serveStatic(path.join(__dirname, '/public')))

app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})
app.listen(port);
console.log('listenting on port', port);
