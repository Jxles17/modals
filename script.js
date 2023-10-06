const btnOpen = document.querySelector('#btnOpen');
const modal = document.querySelector('.modalContainer');
const btnClose = document.querySelector('#btnClose');


function openModal() {
    //dans l'élément modal, utilise la fonction classList pour enlever la string displayNone de l'attribut de class
    modal.classList.toggle('displayNone');
}
//au click sur btnOpen, on lance la fonction openModal
btnOpen.addEventListener('click', openModal);

function closeModal() {
    modal.classList.toggle('displayNone');
}

//au click sur btnClose, on lance la fonction closeModal 
btnClose.addEventListener('click', closeModal);


