 function convertPokemonToLi(pokemon) {
  return `
        <li class="Pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                     <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}"
                />
            </div>
        </li>
    `;
}
const pokemonList = document.getElementById('pokemonList')
pokeApi.getPokemons().then((pokemons = []) => {
    const NewHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = NewHtml
    // pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')            
        /* otimizando o codigo
    const newList = pokemons.map((pokemon) => {
        return convertPokemonToLi (pokemon)
    })
    const NewHtml = newList.join('')
    pokemonList.innerHTML += NewHtml */
  
            // subistituindo por map
    /*  const listItens = []
   for (let index = 0; index < pokemons.length; index++) {
      const pokemon = pokemons[index];
      listItens.push(convertPokemonToLi(pokemon))      
    }
  })  */
 /*/ .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })
    .finally(function () {
        console.log('requisição concluida!'); */
    }) 
    
