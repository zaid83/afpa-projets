const express = require("express");
const app = express();
const port = 3000;
const { success } = require('./helper.js')
let pokemons = require('./mock-pokemon')

app.get('/api/pokemons/', (req, res) => {
    const message = "La liste des Pokemons a bien été envoyé"
    res.json(success(message, pokemons))

});
app.get('/api/pokemons/:id', (req, res) => {
    const id = req.params.id;
    const pokemon = pokemons.find(pokemon => pokemon.id == id)
    const message = "UN pokémon a été trouvé";
    res.json(success(message, pokemon));
})
app.listen(port, () => console.log(`Notre appli demarre sur http://localhost:${port}`));
