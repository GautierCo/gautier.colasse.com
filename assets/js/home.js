/* START:
 * Gestion ajout/suppression de la classe active sur le menu 
 */

/* A mettre sous forme d'objet */


const presentation = document.getElementById('presentation');
const cv = document.getElementById('cv');
const portfolio = document.getElementById('portfolio');

const presentationMobile = document.getElementById('presentation-mobile');
const cvMobile = document.getElementById('cv-mobile');
const portfolioMobile = document.getElementById('portfolio-mobile');

const allSwitch = document.querySelectorAll('.switch');

allSwitch.forEach(element => {
    element.addEventListener('click', (evt) => {

        let eventData = evt.target.dataset['goto'];

        if (eventData == 'goto_cv') {

            presentationMobile.classList.remove("active");
            portfolioMobile.classList.remove("active");
            cvMobile.classList.add('active');

            presentation.classList.remove("active");
            portfolio.classList.remove("active");
            cv.classList.add('active');
        
        } else if (eventData == 'goto_portfolio') {
        
            presentationMobile.classList.remove("active");
            cvMobile.classList.remove("active");
            portfolioMobile.classList.add('active');

            presentation.classList.remove("active");
            cv.classList.remove("active");
            portfolio.classList.add('active');
        
        } else if (eventData == 'goto_presentation') {
        
            cvMobile.classList.remove("active");
            portfolioMobile.classList.remove("active");
            presentationMobile.classList.add('active');

            cv.classList.remove("active");
            portfolio.classList.remove("active");
            presentation.classList.add('active');
        
        }
    });
});

/* END */

const showBackgroundCard = () => {

    const selectAllCards = document.querySelectorAll(`.portfolio-card`);
    
    selectAllCards.forEach(card => {
        
        let cardClass = card.classList[1];
        card.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.2)100%), url('/img/project/${cardClass}.jpg')`;
        card.style.backgroundSize = "cover";

    });
}

showBackgroundCard();