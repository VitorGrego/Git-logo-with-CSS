let logo = document.querySelector('.logo');
let block = document.querySelector('.block');

function MouseSob() {
    let logoPartVerm = document.querySelector('.logo-parte-vermelha');
    let logoPartVerd = document.querySelector('.logo-parte-verde');
    let logoPartAmar = document.querySelector('.logo-parte-amarela');
    let logoPartCian = document.querySelector('.logo-parte-ciano');

    block.style.display = 'block';
    logo.style.backgroundColor = 'white';
}
function MouseFora() {
    block.style.display = 'none';
    logo.style.backgroundColor = '#f34f29';
}