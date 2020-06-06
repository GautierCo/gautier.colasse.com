const hideThis = () => {
    document.querySelector('.ytp-title-link').style.display = "none";
};


const btns = document.querySelectorAll('.portfolio-watch-project');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        hideThis();
    });
});