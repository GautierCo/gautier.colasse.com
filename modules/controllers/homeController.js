
const homeController = {
    homePage: (request, response) => {

        response.render('index', {
            section: null
        });

    },
    homePageById: (request, response) => {

        response.render('index', {
            section: request.params.uid
        });

    },
}

module.exports = homeController;