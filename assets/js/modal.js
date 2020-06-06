/* A mettre sous forme d'objet */

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
}

const allProjectLink = document.querySelectorAll('.portfolio-watch-project');
const modal = document.getElementById('openproject');
const exit = document.getElementById('modal-exit');

const projectName = document.querySelector('.modal-project-name');
const projectDescription = document.querySelector('.modal-project-presentation');
const projectTheme = document.querySelector('.modal-project-theme');
const projectTech = document.querySelector('.modal-project-tech');
const projectUrl = document.querySelector('.modal-project-btn');
const projectLogo = document.querySelector('.modal-project-logo');
const projectUrlGithub = document.querySelector('.modal-project-btn.github');

const scrollY = document.querySelector('html').style.top;

allProjectLink.forEach(project => {
    project.addEventListener('click', (evt) => {

        modal.style.display = "block";
 
        fetchJSONFile((data) => {

            const projectSelected = data.find( (project) => {
                return project.id == evt.target.id;
            });
        
            projectName.textContent = projectSelected.name.toUpperCase();
            projectDescription.textContent = projectSelected.description;
            projectTheme.textContent = projectSelected.theme;
            projectTech.textContent = projectSelected.technology;
            projectUrl.href = projectSelected.url;
            projectLogo.src = projectSelected.logo;

            if (projectSelected.urlGithub) {
                projectUrlGithub.href = projectSelected.urlGithub;
            }
        });
    });
});


exit.addEventListener('click', (evt) => {

    modal.style.display = "none";
});