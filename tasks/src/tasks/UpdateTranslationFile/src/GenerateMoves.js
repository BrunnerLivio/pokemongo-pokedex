import fs from 'fs';
import _ from 'lodash';

class GeneratePokemons {
    static Get() {
        return new Promise((resolve, reject) => {
            fs.readFile('../shared/data/Move.json', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                let moves = JSON.parse(data);

                let formattedMoves = moves.map(move => {
                    return {
                        'Name': move.Name
                    };
                });
                resolve(formattedMoves);
            });
        });

    }
}

module.exports = GeneratePokemons;