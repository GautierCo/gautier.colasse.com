const express = require('express');
const router = require('./router');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./assets'));

app.use(router);

app.listen(3000);