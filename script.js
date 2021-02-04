let qs = (ele)=>{
    return document.querySelector(ele)
}
//Palavras
var palavras = [
['c','a','v','a','l','o'],
['x','i','c','a','r','a'],
['b','a','n','a','n','a'],
['m','a','n','g','a'],
['o','v','e','l','h','a'],
['v','a','s','s','o','u','r','a'],
['n','o','i','t','e'],
['c','a','m','a'],
['p','e','i','x','e'],
['h','i','s','t','o','r','i','a'],
['p','e','d','r','e','i','r','o'],
['x','i','c','a','r','a']
]
//Dicas
var dicas = [
    ['Vivi no mato, se alimenta de Mato e tem quatro patas'],//cavalo
    ['Serve para toma café'],//xicara
    ['Da no mato, tem de cor verde amarelo e roxo, é branco por dentro'],//banana
    ['Quando verde e amargo e quando maduro e doce'],//manga
    ['E peludo tem quatro patas e vivi no pasto'],//ovelha
    ['Serve para limpar'],//vasoura
    ['E escuro'],//noite
    ['Serve para dormi'],//cama
    ['Vivi na água'],//peixe
    ['conta o passado'],//história
    ['Trabalha com cimento'],//pedreiro
    ['Tem na cozinha']//xicara
] 
  
//selecionando dicas
function palavrasDicas(count){
    for(let i=0; i<dicas.length; i++){
        if(palavraSorteada == i){
            qs('.dica p').innerHTML = `${dicas[i]} com <strong style="color:Tomato;" > ${count}</strong> Letras`             
        }
    }
}


var letra
var palavraSorteada = Math.floor(Math.random() * palavras.length) 
qs('.inicia').addEventListener('click',()=>{      
    tempo()
    for(let i=0; i<palavras.length; i++){
        if(i === palavraSorteada){
            letra = palavras[i]
        }
    }

    for(let x=0; x<letra.length; x++){
        var contador =1
        var span = document.createElement('span') 
        span.innerHTML = letra[x]
        qs('.palavras').appendChild(span) 
        contador += x        
    }     
    qs('.inicia').disabled = true  
    palavrasDicas(contador)
})

    var cabeca = qs('.cabeca')
    var corpo = qs('.corpo')
    var bracoEsquerdo = qs('.braco-esquerdo')
    var bracoDireito = qs('.braco-direito')
    var pernaEsquerda = qs('.perna-esquerda')
    var pernaDireita = qs('.perna-direita')
    var cordaComLaco = qs('.corda-com-laco')
    var cordaSemLaco = qs('.corda-sem-laco')

    cabeca.style.display = 'none'
    corpo.style.display = 'none'
    bracoEsquerdo.style.display = 'none'
    bracoDireito.style.display = 'none'
    pernaEsquerda.style.display = 'none'
    pernaDireita.style.display = 'none'
    cordaComLaco.style.display = 'flex'
    cordaSemLaco.style.display = 'none'
   
//Aparecendo corpo
function jogada(valor){ 
    for(let x=0; x<letra.length; x++){
        if(valor === letra[x]){           
            var letraPx = letra[x]  
        }         
    } 

    if(letraPx != valor){  
        if(cabeca.style.display == 'none'){        
            cabeca.style.display = 'flex'
            cordaSemLaco.style.display = 'flex'
            cordaComLaco.style.display = 'none'
        }
        else if(corpo.style.display == 'none'){
            corpo.style.display = 'flex'
        }
        else if(corpo.style.display == 'none'){
            corpo.style.display = 'flex'
        }
        else if(bracoEsquerdo.style.display == 'none'){
            bracoEsquerdo.style.display = 'flex'
        }
        else if(bracoDireito.style.display == 'none'){
            bracoDireito.style.display = 'flex'
        }
        else if(pernaEsquerda.style.display == 'none'){
            pernaEsquerda.style.display = 'flex'
        }
        else if(pernaDireita.style.display == 'none'){
            pernaDireita.style.display = 'flex'
        }        
    } 
    apareceLetra(valor)     
}

var arreyLetra = []
//aparece Letra
function apareceLetra(valor){
    var letraSel = document.querySelectorAll('.palavras span') 
     
    for(var y=0; y<letraSel.length; y++){
        if(letraSel[y].innerHTML == valor){
            letraSel[y].style.color = '#000080'
            letraSel[y].style.textShadow = '4px 4px 4px #1E90FF'  

            arreyLetra.push(letraSel[y]) 
        }          
    }  
    
    if (arreyLetra.length == letraSel.length) {
        setTimeout(()=>{
            window.location.href= "parabens.html"
        },1000)
        
    }
    if (qs('.cabeca').style.display == 'flex' && qs('.corpo').style.display == 'flex'
    && qs('.braco-esquerdo').style.display == 'flex' && qs('.braco-direito').style.display == 'flex'
    && qs('.perna-esquerda').style.display == 'flex' && qs('.perna-direita').style.display == 'flex'){
        setTimeout(()=>{
            window.location.href="gameover.html"
        },1000)
    }
}

//tempo
function tempo(){
    var minuto = 60
    setInterval(() => {
        minuto--
      qs('.tempo span').innerHTML = minuto

      if(minuto == 0){
          window.location.href="gameover.html"
      }
      if(minuto == 10){
        setInterval(() => {
            qs('.tempo').style.opacity = '0'
        }, 500);

        setInterval(() => {
            qs('.tempo').style.opacity = '1'
        }, 1000);
      }
    }, 1000);    
} 