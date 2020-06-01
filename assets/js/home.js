/* START:
 * Gestion ajout/suppression de la classe active sur le menu 
 */

const presentation = document.getElementById('presentation');
const cv = document.getElementById('cv');
const portfolio = document.getElementById('portfolio');

const allSwitch = document.querySelectorAll('.switch');

allSwitch.forEach(element => {
    element.addEventListener('click', (evt) => {

        let eventData = evt.target.dataset['goto'];

        if (eventData == 'goto_cv') {

            presentation.classList.remove("active");
            portfolio.classList.remove("active");
            cv.classList.add('active');
        
        } else if (eventData == 'goto_portfolio') {
        
            presentation.classList.remove("active");
            cv.classList.remove("active");
            portfolio.classList.add('active');
        
        } else if (eventData == 'goto_presentation') {
        
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
        console.log(card);
        card.style.backgroundImage = `url('/img/project/${cardClass}.jpg')`;
        card.style.backgroundSize = "cover";

    });
}

showBackgroundCard()