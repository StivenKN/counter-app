// ? Declaración
let $number = document.querySelector('#number');
let $decreaseBtn = document.querySelector('#decrease');
let $resetBtn = document.querySelector('#reset');
let $increaseBtn = document.querySelector('#increase');

//* Local Storage
if (!localStorage.getItem('numero')) {
    localStorage.setItem('numero', 0);
}
let valorNumero = localStorage.getItem('numero');
$number.textContent = valorNumero;

// * Listeners
$decreaseBtn.addEventListener('click', () => {
    valorNumero = parseInt(valorNumero) - 1;
	$number.textContent = valorNumero;
	localStorage.setItem('numero', valorNumero);
});
$resetBtn.addEventListener('click', () => {
    valorNumero = 0;
    $number.textContent = valorNumero;
	localStorage.setItem('numero', valorNumero);
});
$increaseBtn.addEventListener('click', () => {
	valorNumero = parseInt(valorNumero) + 1;
	$number.textContent = valorNumero;
	localStorage.setItem('numero', valorNumero);
});

