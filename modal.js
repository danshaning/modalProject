const modal_shade = document.querySelector("#modal_shade");
const modal_container = document.querySelector("#modal-container");
let btn = document.querySelector("#btn");
let btnClose = document.querySelector("#close_btn");

btn.addEventListener('click', () => {

    modal_shade.style.display = 'block';
    modal_container.style.display = 'block';
    btn.style.display = 'none';
});

btnClose.addEventListener('click', () => {
    modal_shade.style.display = 'none';
    modal_container.style.display = 'none';
    btn.style.display = 'inline';
});


modal_shade.addEventListener('click', () => {

    modal_shade.style.display = 'none';
    modal_container.style.display = 'none';
    btn.style.display = 'inline';
});

