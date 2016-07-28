import program from 'commander';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import childProcess from 'child_process';

program
    .version('0.0.1')
    .option('-t, --task <s>', 'The name of the task')
    .parse(process.argv);

function runScript(scriptPath, callback) {

    var invoked = false;

    var process = childProcess.fork(scriptPath);
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });

    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}
let tasks = getDirectories(__dirname + '/tasks');
if (_.includes(tasks, program.task)) {
    runScript(__dirname + '/tasks/' + program.task + '/src/index.js', (err) => {
        if (err) throw err;
    });
}