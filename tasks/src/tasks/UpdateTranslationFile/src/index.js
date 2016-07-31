import fs from 'fs';
import _ from 'lodash';
import GeneratePokemon from './GeneratePokemons';
import GenerateMoves from './GenerateMoves';

function getPokemons(pokemons) {
    return pokemons.map(pokemon => {
        return {
            "Name": pokemon.Name
        };
    });

}

fs.readFile('../shared/data/translations/en.json', 'utf8', function (err, data) {
    let translation = JSON.parse(data);
    GeneratePokemon.Get().then(pokemons => {
        translation.Pokemons = pokemons;
        GenerateMoves.Get().then(moves => {
            translation.Moves = moves;
            fs.writeFile('../shared/data/translations/en.json', JSON.stringify(translation));
        });
    });

});
