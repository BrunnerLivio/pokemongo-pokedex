import fs from 'fs';
import _ from 'lodash';

class GeneratePokemons {
    static Get() {
        return new Promise((resolve, reject) => {
            fs.readFile('../shared/data/Pokemon.json', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                let pokemons = JSON.parse(data);

                let formattedPokemons = pokemons.map(pokemon => {
                    return {
                        'Name': pokemon.Name,
                        'Id': pokemon.Id
                    };
                });
                resolve(formattedPokemons);
            });
        });

    }
}

module.exports = GeneratePokemons;