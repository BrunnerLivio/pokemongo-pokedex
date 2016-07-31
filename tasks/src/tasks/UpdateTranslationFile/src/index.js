import fs from 'fs';
import _ from 'lodash';
import GeneratePokemon from './GeneratePokemons';

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
        fs.writeFile('../shared/data/translations/en.json', JSON.stringify(translation));
    });

});
