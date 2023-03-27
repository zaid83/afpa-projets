const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon")
const app = express();
const port = 3000;
const { success } = require('./helper.js')
const { getUniqueId } = require('./helper.js')
let pokemons = require('./mock-pokemon')

app.use(favicon(__dirname + '/img/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())


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

app.post('/api/pokemons', (req, res) => {
    const id = getUniqueId(pokemons);
    const pokemonCreated = { ...req.body, ...{ id: id, created: new Date() } }
    pokemons.push(pokemonCreated)
    const message = `Le pokémon ${pokemonCreated.name} a bien été crée.`

    res.json(success(message, pokemonCreated))
})

app.listen(port, () => console.log(`Notre appli demarre sur http://localhost:${port}`));
