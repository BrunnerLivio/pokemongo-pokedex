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

                let formattedPokemons  = {};
                _(pokemons).each(pokemon => {
                    formattedPokemons[pokemon.Id] = {
                        'Name': pokemon.Name
                    };
                });
                resolve(formattedPokemons);
            });
        });

    }
}

module.exports = GeneratePokemons;