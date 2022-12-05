// html references

const inputRating = document.querySelector('.rating-list');
const insertSpan = document.querySelector('.selected-rating');
const btnSubmit = document.querySelector('.btn-submit');
const mainScreen = document.querySelector('#main-state');
const tnksScreen = document.querySelector('#thankyou-state');

// functions
const insertHtml = (text) => {
    const spanHtml = `${text}`;
    insertSpan.innerHTML = spanHtml;
}

const changeScreen = () => {
    mainScreen.classList.toggle('hidden');
    tnksScreen.classList.toggle('hidden');
};

// events

inputRating.addEventListener('click', (event) => {
    btnRadio = event;
    console.log(btnRadio);
    if(btnRadio.target.value >= 1){
        insertHtml(btnRadio.target.value);
        btnSubmit.addEventListener('click', () => {
            changeScreen();
            btnRadio.target.checked = false;
        });
    };
});
