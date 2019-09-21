const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
//const controller = require('./controller/controller');

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-type,Accept,x-access-token,X-Key"
    );
    if (req.method == "OPTIONS") {
        res.status(200).end();
    } else {
        next();
    }
});
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/angular-test'));

// app.get('/x/:shorten', controller.useShortenCtrl);
// app.post('/api/checkURL', controller.checkURLCtrl);
// app.post('/api/shortenURL', controller.makeShortenCtrl);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/angular-test/index.html'));
});

app.listen(process.env.PORT || 4200);