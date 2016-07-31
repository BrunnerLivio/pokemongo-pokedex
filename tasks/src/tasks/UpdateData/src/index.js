import fs from 'fs-extra';

fs.copy('../shared/data', '../mobile/www/assets/data', function (err) {
    if (err) return console.error(err);
    console.log("Successfully copied the data!");
});