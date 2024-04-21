const toggleInput = document.querySelector('.toggle-input');
const body = document.body;
const background = document.querySelector('.background');

toggleInput.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    // Change l'image de fond en fonction de l'état du mode sombre
    if (body.classList.contains('dark-mode')) {
        background.style.backgroundImage = "url('assets/images portfolio/dark-portfolio.jpg')";
    } else {
        background.style.backgroundImage = "url('assets/images portfolio/light-portfolio.jpg')";
    }
});
