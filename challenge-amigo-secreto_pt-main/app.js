let listaAmigos = []; 
let amigosSorteados = []; 

function atualizarBotaoSortear() {
    let botaoSortear = document.querySelector(".button-draw");
    if (listaAmigos.length === 0){
        botaoSortear.disabled = true;
    }else{
        botaoSortear.disabled = false; 
    }

}

function adicionarAmigo() {
  let inputAmigo = document.getElementById("amigo").value.trim(); 

  if (inputAmigo === "") {
    alert("Por favor, insira um nome!");
    return;
  }

  if (listaAmigos.includes(inputAmigo)) {
    alert("Este amigo já foi adicionado!");
  }

  listaAmigos.push(inputAmigo); 
  amigosSorteados = []; 

  atualizarAmigos();
    atualizarBotaoSortear(); 

  document.getElementById("amigo").value = "";  
}


function atualizarAmigos() {
  document.getElementById("listaAmigos").innerHTML = ""; 

    listaAmigos.sort(); 

  listaAmigos.forEach((amigo) => { 
    let li = document.createElement("li");
    li.innerHTML = amigo; 
    document.getElementById("listaAmigos").appendChild(li); 
  });
}


function sortearAmigo() {
    if (listaAmigos.length === 0) { 
      alert("Adicione os nomes antes de sortear!");
      return;
    }
  
   
    if (amigosSorteados.length === listaAmigos.length) {
      alert("Todos os amigos já foram sorteados!");
      return;
    }
  
    let amigoSelecionado;
  
    do {
      amigoSelecionado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    } while (amigosSorteados.includes(amigoSelecionado)); 
  
    amigosSorteados.push(amigoSelecionado);
  
    document.getElementById(
      "resultado"
    ).innerHTML = `Amigo Sorteado: ${amigoSelecionado}`; 
  
    atualizarBotaoSortear();
  }


document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { 
      adicionarAmigo(); 
    }
  });
 
  
function novoSorteio() {
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('amigo').value = '';
     listaAmigos = [];
     amigosSorteados = [];

    atualizarBotaoSortear(); 
}
