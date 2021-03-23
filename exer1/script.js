
let deer = document.getElementById('text');
let assi = document.getElementById('changeStyle');
assi.addEventListener('click', restyle);


function restyle(){
deer.style.color = 'red';
deer.style.backgroundColor = 'green';
deer.style.fontFamily = 'Arial, Helvetica, sans-serif';
deer.style.fontSize = '50px';
}
