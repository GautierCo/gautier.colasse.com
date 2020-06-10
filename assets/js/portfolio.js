
/*
    À ce stade la formation, je ne sais pas encore comment faire autrement qu'avec un JSON et les fonctions ci-dessous,
    car si j'utiliserais NodeJS et une base de donnée, je serais le faire mais comme je suis sur une onePage comme ce site 
    je ne sais pas encore comment récupérer des datas autrement sans faire refresh la page à chaque clique sur les projets du portfolio par exemple.
*/

// On récupère notre fichier JSON

function fetchJSONFile(callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', "../../data/projectsdev.json");
    httpRequest.send(); 
};

// Insertion des données dans chaque modal en fonction de l'ID de l'icon "eyes", et affiche la modal : 

const setDataInModal = () => {

    const allProjectLink = document.querySelectorAll('.portfolio-watch-project');
    const modal = document.getElementById('openproject');
    const exit = document.getElementById('modal-exit');

    allProjectLink.forEach(project => {
        project.addEventListener('click', (evt) => {

            document.querySelector('.modal-project-btn.github').style.display = 'none';

            modal.style.display = "block";
    
            fetchJSONFile((data) => {

                const projectSelected = data.find( (project) => {
                    return project.id == evt.target.id;
                });
            
                document.querySelector('.modal-project-name').textContent = projectSelected.name.toUpperCase();
                document.querySelector('.modal-project-presentation').textContent = projectSelected.description;
                document.querySelector('.modal-project-theme').textContent = projectSelected.theme;
                document.querySelector('.modal-project-tech').textContent = projectSelected.technology;
                document.querySelector('.modal-project-btn').href = projectSelected.url;
                document.querySelector('.modal-project-logo-mobile').src = projectSelected.logo;
                document.querySelector('.modal-project-logo-desktop').src = projectSelected.logo;

                if (projectSelected.urlGithub != null) {

                    const projectUrlGithub = document.querySelector('.modal-project-btn.github');

                    projectUrlGithub.href = projectSelected.urlGithub;
                    projectUrlGithub.style.display = 'inline-block';
                }
            });
        });
    });

    // Permet de quitter la modal : 

    exit.addEventListener('click', (evt) => {

        modal.style.display = "none";
    });

};

// Insère un background-image pour chaque card affichée :

const showBackgroundCard = () => {

    const selectAllCards = document.querySelectorAll(`.portfolio-card`);
    
    selectAllCards.forEach(card => {
        
        let cardClass = card.classList[1];
        card.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.2)100%), url('/img/project/${cardClass}.jpg')`;
        card.style.backgroundSize = "cover";

    });
};

const removeAllCard = () => {

    const containerCards = document.querySelector(`.portfolio-card-container`);
    const selectAllCards = document.querySelectorAll(`.portfolio-card`);

    selectAllCards.forEach(card => {
        containerCards.removeChild(card);
    });
};

const createCard = (project) => {

    const portfolioContainer = document.querySelector('.portfolio-card-container');

    const projectName = project.name.toLowerCase();

    const portfolioCard = document.createElement('div');
    portfolioCard.classList.add('portfolio-card', projectName); // pas oublié d'add la classe par le name du project
    portfolioContainer.appendChild(portfolioCard);

    const portfolioBtn = document.createElement('div');
    portfolioBtn.classList.add('portfolio-btn-project');
    portfolioBtn.textContent = project.name.toUpperCase();
    portfolioCard.appendChild(portfolioBtn);

    const projectLink = document.createElement('a');
    projectLink.href = '#portcontainer'; // pas oublié d'add la classe par le name du project
    portfolioCard.appendChild(projectLink);

    const projectWatch = document.createElement('i');
    projectWatch.classList.add('portfolio-watch-project', 'far', 'fa-eye', 'fa-lg');
    projectWatch.id = project.id;
    projectLink.appendChild(projectWatch);

    showBackgroundCard();
    setDataInModal();
};

// Création des cards avec leurs informations en fonction de la catégorie sélectionnée par l'user :

const createPorfolioByCategory = (categorieSelect) => {

    fetchJSONFile((data) => {
        

        if (categorieSelect !== "all") {

            const projectWithThisCat = data.filter((cat) => {
                return cat.technology.toLowerCase() == categorieSelect;
            });

            projectWithThisCat.forEach((project) => {
                createCard(project);
            });
        } else {

            data.forEach(project => {
                createCard(project);
            });
        }
    });
};


// Gestion de la classe active lorsqu'une catégorie est cliqué :

const getAllCategories = document.querySelectorAll('.portfolio-category-link');

getAllCategories.forEach(categorie => {

    categorie.addEventListener('click', (e) => {

        removeAllCard();

        let categorySelect = null;

        getAllCategories.forEach(cat => {
            
            cat.classList.remove('active');
        });

        if (e.target) {
            categorySelect = e.target.id;
        }

        e.target.classList.add('active');
        createPorfolioByCategory(categorySelect);

    });
});

createPorfolioByCategory('all');