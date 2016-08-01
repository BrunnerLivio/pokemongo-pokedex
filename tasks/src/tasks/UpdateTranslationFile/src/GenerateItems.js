import fs from 'fs';
import _ from 'lodash';

class GenerateItems {
    static Get() {
        return new Promise((resolve, reject) => {
            fs.readFile('../shared/data/Item.json', 'utf8', function (err, data) {
                if (err) {
                    return console.log(err);
                }
                let items = JSON.parse(data);

                let formattedItems = {}
                items.map(item => {
                    formattedItems[item.Id] = {
                        'Name': item.Name
                    };
                });
                resolve(formattedItems);
            });
        });

    }
}

module.exports = GenerateItems;