require('marko/node-require').install();

var express = require('express');
var port = 8080;
var serveStatic = require('serve-static');

require('lasso').configure({
    bundlingEnabled: false,
    plugins: [
        'lasso-marko'
    ],
    minify: false,
    bundlingEnabled: false,
    fingerprintsEnabled: false
});

var app = express();
app.use('/static', serveStatic(__dirname + '/static'));
app.get('/', require('./src/pages/index'));

app.listen(port, function() {
    console.log('Listening on port %d', port);

    if (process.send) {
        process.send('online');
    }
});