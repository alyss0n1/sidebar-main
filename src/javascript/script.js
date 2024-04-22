//quando o "open_btn por clicado, executar a função click"
document.getElementById('open_btn').addEventListener('click', function () { //aguardar o click, e quando acontecer, realizar a funçao
    document.getElementById('sidebar').classList.toggle('open-sidebar'); //seleciona elemento que iremos controlar. toggle se a classe open-side bar, ja existir, remove-la, caso nao existe, adicione
});