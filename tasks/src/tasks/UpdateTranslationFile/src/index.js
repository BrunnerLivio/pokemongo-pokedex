import fs from 'fs';
import _ from 'lodash';
import GeneratePokemon from './GeneratePokemons';
import GenerateMoves from './GenerateMoves';
import GenerateItems from './GenerateItems';


fs.readFile('../shared/data/translations/en.json', 'utf8', function (err, data) {
    let translation = JSON.parse(data);
    GeneratePokemon.Get().then(pokemons => {
        translation.Pokemons = pokemons;
        GenerateMoves.Get().then(moves => {
            translation.Moves = moves;
            GenerateItems.Get().then(items => {
                translation.Items = items;
                fs.writeFile('../shared/data/translations/en.json', JSON.stringify(translation));
            });
        });
    });

});
