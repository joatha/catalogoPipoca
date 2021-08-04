const busca =  ()=>{

    setTimeout(function busca(){
        pesquisaFilme()
    }, 1000)  
}

const pesquisaFilme = async()=>{

    const textoFilme  = document.getElementById('textoFilme').value
    const url = 'https://www.omdbapi.com/?apikey=cebbc5f7&t=' + textoFilme
    const dados = await fetch(url)  
    const catalogo =  await dados.json()     
   
    const pegarImage = await catalogo.Poster 
    const pegarTitulo = await catalogo.Title
    const pegarAno = await catalogo.Year
    const pegarGenero = await catalogo.Genre
    const pegarCountry = await catalogo.Country
    const pegarDirector = await catalogo.Director
    const pegarWriter = await  catalogo.Writer
    const pegarActors = await catalogo.Actors
    const pegarPlot = await catalogo.Plot
    const pegarLanguage = await catalogo.Language

    if(textoFilme == ''){                
       document.getElementById('respostaPesquisa').innerHTML=''
       return textoFilme        
    }  
   
    else{
              
       document.getElementById('respostaPesquisa').innerHTML =`<h1><b>Titulo:</b> ${pegarTitulo}</h1><br>
                                                               <img src="${pegarImage}">
                                                               <h1><b>Ano:</b> ${pegarAno}</h1>
                                                               <h1><b>Gênero:</b> ${pegarGenero}</h1>
                                                               <h1><b>País:</b> ${pegarCountry}</h1>
                                                               <h1><b>Diretor:</b> ${pegarDirector}</h1>
                                                               <h1><b>Escrito Por:</b> ${pegarWriter}</h1>
                                                               <h1><b>Elenco:</b> ${pegarActors}</h1>
                                                               <h1><b>Idioma:</b> ${pegarLanguage}</h1>
                                                               <h1><b>Sinopse:</b> ${pegarPlot}</h1><br><br>`          
    }
               
}



