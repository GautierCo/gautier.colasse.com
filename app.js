const express = require('express');
const router = require('./router');
const dataProject = require('./assets/data/projectsdev.json');

const app = express();

app.locals.dataProject = dataProject;

app.set('view engine', 'ejs');

app.use(express.static('./assets'));

app.use(router);

app.listen(3000, () => {
    console.log('Lancement du serveur sur le port : ' + 3000);
});

/*
app.listen(process.env.PORT, () => {
    console.log('Lancement du serveur sur le port : ' + process.env.PORT);
});

*/