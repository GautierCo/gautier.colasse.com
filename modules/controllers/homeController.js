
const homeController = {
    homePage: (request, response) => {
        
        response.render('index', {
            dataProject: request.app.locals.dataProject
        });

    },
}

module.exports = homeController;