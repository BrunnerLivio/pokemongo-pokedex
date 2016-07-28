import fs from 'fs';
import _ from 'lodash';
fs.readFile('../globalData/Pokemon.json', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    let pokemons = JSON.parse(data);

    let statsObj = { Encounter: { BaseCaptureRate: 0, BaseFleeRate: 0, DodgeInterval: 0, AttackTimer: 0 }, Stats: { BaseStamina: 0, BaseAttack: 0, BaseDefense: 0 }, AverageHeight: 0, AverageWeight: 0 };

    _.each(pokemons, pokemon => {
        for (let key in statsObj.Encounter) {
            if (pokemon.Encounter[key] !== undefined)
                statsObj.Encounter[key] += pokemon.Encounter[key];
        }
        for (let key in statsObj.Stats) {
            if (pokemon.Stats[key] !== undefined)
                statsObj.Stats[key] += pokemon.Stats[key];
        }
        for (let key in statsObj) {
            if (pokemon[key] !== undefined && typeof pokemon[key] !== 'object')
                statsObj[key] += pokemon[key];
        }
    });
    for (let key in statsObj.Encounter) {
        statsObj.Encounter[key] /= pokemons.length;
    }
    for (let key in statsObj.Stats) {
        statsObj.Stats[key] /= pokemons.length;
    }
    for (let key in statsObj) {
        if (typeof statsObj[key] !== 'object')
            statsObj[key] /= pokemons.length;
    }
    fs.writeFile('../globalData/AveragePokemonStats.json', JSON.stringify(statsObj));
});