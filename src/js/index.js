// referencias html

const inputRating = document.querySelector('.rating');
const insertSpan = document.querySelector('.selected-rating');
const btnSubmit = document.querySelector('.btn-submit');
const mainScreen = document.querySelector('#main-state');
const tnksScreen = document.querySelector('#thankyou-state');

// funciones
const insertHtml = (text) => {
    const spanHtml = `${text}`;
    insertSpan.innerHTML = spanHtml;
}

const changeScreen = () => {
    mainScreen.style.display = 'none';
    tnksScreen.style.display = 'initial';
};

// eventos

inputRating.addEventListener('click', (event) => {
    text = event.target.textContent;
    if(text.length == 1){
        insertHtml(text);
        btnSubmit.addEventListener('click', () => {
                changeScreen();
        });
    };
})
