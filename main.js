
const busca =  ()=>{
    pesquisaFilme()
}

const pesquisaFilme = async()=>{
    
    const textoFilme = document.getElementById('textoFilme').value

    if(textoFilme == ''){
        document.getElementById('nomeFilme').innerHTML =''
        document.getElementById('imagemPoster').innerHTML =''
        document.getElementById('anoFilme').innerHTML =''
        document.getElementById('genre').innerHTML =''
        document.getElementById('diretor').innerHTML =''
        document.getElementById('atores').innerHTML =''
        document.getElementById('plot').innerHTML =''
    }
    else{

        const url = 'https://www.omdbapi.com/?apikey=cebbc5f7&t=' + textoFilme
        const dados = await fetch(url)
        const catalogo =  await dados.json()
        const pegarImage = await catalogo.Poster           
       
        document.getElementById('nomeFilme').innerHTML =`<h1><b>Titulo:</b> ${catalogo.Title}</h1>`
        document.getElementById('imagemPoster').innerHTML = `<img src="${pegarImage}">`
        document.getElementById('anoFilme').innerHTML =`<h1><b>Ano:</b> ${catalogo.Year}</h1>` 
        document.getElementById('genre').innerHTML = `<h1><b>Gênero:</b> ${catalogo.Genre}</h1>`
        document.getElementById('diretor').innerHTML = `<h1><b>Diretor:</b> ${catalogo.Director}</h1>`
        document.getElementById('atores').innerHTML = `<h1><b>Elenco:</b> ${catalogo.Actors}</h1>`
        document.getElementById('plot').innerHTML = `<p><b>Sinopse:</b><br> ${catalogo.Plot}</p>`  

    }  

}
