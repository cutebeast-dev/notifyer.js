const { spawn } = require('child_process');
const package = require('../package.json');
const Notifyer = {};

console.clear();
console.log(`Notifyer v${package.version}`);

const os = process.platform;
console.log(`OS: ${os}`);

let notifyCommand = '';
switch (os) {
    case 'linux':
        notifyCommand = 'notify-send';
        break;
}

Notifyer.notify = (text) => {
    return new Promise((resolve, reject) => {
        if (notifyCommand) {
            const ls = spawn(notifyCommand, [text]);

            ls.stdout.on('data', (_) => {
                resolve();
            });

            ls.stderr.on('data', (_) => {
                reject(data);
            });
        } else {
            reject({ message: `Operational System not recognized:\nOpen a issue on project including (${os})` });
        }
    });

}

module.exports = Notifyer;