function filtrarReceitas(categoriaEscolhida){
    
    var listaDasCategoriasExistentes = document.getElementsByClassName('categoria-receita')

    for(i=0; i<listaDasCategoriasExistentes.length; i++){

        var categoriaAtual = document.getElementsByClassName('categoria-receita')[i]
        var listaDeReceitas = document.getElementsByClassName('receita')
        
        var isCategoriaEscolhida = categoriaAtual.textContent.toUpperCase() == categoriaEscolhida.toUpperCase()
        var isCategoriaTodas = categoriaEscolhida.toUpperCase() == "TODAS"
        
        if(isCategoriaEscolhida || isCategoriaTodas){
            listaDeReceitas[i].style.display = ''

        }else{
            listaDeReceitas[i].style.display = 'none'
        }
    }
}

function mudaImagem(alo){
    var algo = document.getElementsByClassName('favorito-vazio')
    console.log(alo.src)


        if(alo.src == "http://127.0.0.1:5500/imagens/favorito-vazio.png"){
            alo.src = "http://127.0.0.1:5500/imagens/favorito-preenchido.png"
        }else{
            alo.src = "http://127.0.0.1:5500/imagens/favorito-vazio.png" 
        }

    
}


