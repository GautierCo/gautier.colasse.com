const express = require('express');
const router = require('./router');
const dataProject = require('./assets/data/projectsdev.json');
const PORT = 80;
const app = express();

app.locals.dataProject = dataProject;

app.set('view engine', 'ejs');

app.use(express.static('./assets'));

app.use(router);

app.listen(PORT, () => {
    console.log('Launching server on port : ' + PORT);
});
