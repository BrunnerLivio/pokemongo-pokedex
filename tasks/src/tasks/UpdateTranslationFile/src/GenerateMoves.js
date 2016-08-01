import fs from 'fs';
import _ from 'lodash';

class GenerateMoves {
    static Get() {
        return new Promise((resolve, reject) => {
            fs.readFile('../shared/data/Move.json', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                let moves = JSON.parse(data);
                let movesFormatted = {};
                _(moves).each(move => {
                    movesFormatted[move.Id] = {
                        'Name': move.Name
                    };
                });
                resolve(movesFormatted);
            });
        });

    }
}

module.exports = GenerateMoves;