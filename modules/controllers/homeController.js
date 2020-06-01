
const homeController = {
    homePage: (request, response) => {

request.app.locals.dataProject

        response.render('index', {
            dataProject: request.app.locals.dataProject
        });

    },
}

module.exports = homeController;