const express = require('express');
const router = require('./router');
const dataProject = require('./data/projects.json');
const app = express();


app.locals.dataProject = dataProject;

app.set('view engine', 'ejs');

app.use(express.static('./assets'));

app.use(router);

app.listen(3000);