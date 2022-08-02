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
    console.log(alo.src)


        if(alo.src == "https://raw.githubusercontent.com/GiulioBernardi/primeiras-paginas-web-2022/main/imagens/favorito-vazio.png"){
            alo.src = "https://raw.githubusercontent.com/GiulioBernardi/primeiras-paginas-web-2022/main/imagens/favorito-preenchido.png"
        }else{
            alo.src = "https://raw.githubusercontent.com/GiulioBernardi/primeiras-paginas-web-2022/main/imagens/favorito-vazio.png" 
        }

    
}


