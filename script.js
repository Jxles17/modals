const btnOpen = document.querySelector('#btnOpen');
const modal = document.querySelector('.modalContainer');
const btnClose = document.querySelector('#btnClose');


function openModal() {
    //dans l'élément modal, utilise la fonction classList pour enlever la string displayNone de l'attribut de class
    // On peut utiliser 'remove' a la place de toggle pour enlever la classe displayNone et afficher la modal
    modal.classList.toggle('displayNone');
}

//création de la fonction closeModal
//on peut utiliser 'add' a la place de toggle pour ajouter la classe displayNone et cacher la modal
function closeModal() {
    modal.classList.toggle('displayNone');
}

//au click sur btnOpen, on lance la fonction openModal
btnOpen.addEventListener('click', openModal);

//au click sur btnClose, on lance la fonction closeModal 
btnClose.addEventListener('click', closeModal);














////_____ _           _                       _                                _      _     _ ___
//// ____( )         | |                     (_)                              | |    | |   | |__ \
//| |    |/  ___  ___| |_    __ _ _   _  ___  _    ___ ___   _ __   ___  _   _| | ___| |_  | |  ) |
//| |       / _ \/ __| __|  / _` | | | |/ _ \| |  / __/ _ \ | '_ \ / _ \| | | | |/ _ \ __| | | / /
//| |____  |  __/\__ \ |_  | (_| | |_| | (_) | | | (_|  __/ | |_) | (_) | |_| | |  __/ |_  |_||_|
// \_____|  \___||___/\__|  \__, |\__,_|\___/|_|  \___\___| | .__/ \___/ \__,_|_|\___|\__| (_)(_)
//                             | |                          | |
//                             |_|                          |_|                                 