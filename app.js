window.onload = () =>{
    const boton = document.querySelector("#bt");
    const quoteStarWars = document.querySelector(".quote");
    const getQuote = async () => {
        const API = await fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote');
        const quote = await API.json();
        const frase = quote.starWarsQuote;
        mQuote(frase);
    }
    const mQuote = frase => {
        quoteStarWars.innerHTML = `"${frase}"`;
    }
    getQuote(); //Before first click.
    boton.onclick = getQuote;
}