const imagens = document.querySelector(".projeto-imagens");
const botaoAnterior = document.querySelector(".anterior");
const botaoProximo = document.querySelector(".proximo");
const totalImagens = imagens.children.length;

let indiceAtual = 0;

function atualizarCarrossel(){
       const largura = imagens.parentElement.clientWidth;

    imagens.style.transform = `translateX(-${indiceAtual * largura}px)`; ;
}

botaoProximo.addEventListener("click", function(){
    if(indiceAtual < totalImagens - 1){
        indiceAtual++;
    } else{
        indiceAtual = 0;
    }

    atualizarCarrossel();
});

botaoAnterior.addEventListener("click", function(){
    if(indiceAtual > 0 ){
        indiceAtual--;
    } else{
        indiceAtual = totalImagens - 1;
    }

    atualizarCarrossel();
});

