const express = require('express');
const router = require('./router');
const dataProject = require('./assets/data/projectsdev.json');
const PORT = 3000;
const app = express();

app.locals.dataProject = dataProject;

app.set('view engine', 'ejs');

app.use(express.static('./assets'));

app.use(router);

app.listen(PORT, () => {
    console.log('Lancement du serveur sur le port : ' + PORT);
});