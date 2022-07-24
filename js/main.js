const botao = document.getElementsByClassName('botao')[0];
const imagem = document.getElementsByClassName('principal')[0];
const theme = 'black';

botao.addEventListener('click', () => {
    if(botao.innerHTML == "INVERNO"){
        botao.innerHTML = "VERÃO"

        imagem.classList.remove('inverno');
        imagem.classList.add('verao');
    } else{
        botao.innerHTML = "INVERNO";

        imagem.classList.remove('verao');
        imagem.classList.add('inverno');
    }
})