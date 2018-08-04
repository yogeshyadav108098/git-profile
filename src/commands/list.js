'use strict';

// 3rd Party
const Chalk = require('chalk');
const Promise = require('bluebird');

// Internal
const Base = require('./base');


/*
    List a user profile
*/
class List extends Base {
    constructor() {
        super();
    }

    exec() {
        let self = this;
        let command;
        let profileResults = {};
        return new Promise((resolve, reject) => {
            return Promise.resolve()
                .then(() => {
                    command = 'git config --list --global | grep gitprofilemanager.*';
                    return self.run(command);
                })
                .then((result) => {
                    let { code, stdout } = result;
                    stdout = stdout.split('\n');
                    stdout.forEach(element => {
                        if (!element) {
                            return;
                        }

                        let elementSplit = element.split('=');
                        let value = elementSplit[1];

                        elementSplit = elementSplit[0].split('.');
                        let key = elementSplit[2];
                        if (!profileResults[elementSplit[1]]) {
                            profileResults[elementSplit[1]] = {};
                        }

                        profileResults[elementSplit[1]][key] = value;
                    });
                    return Promise.resolve();
                })
                .then(() => {
                    console.log('');
                    Object.keys(profileResults).forEach((profileTitle) => {
                        console.log(Chalk.bold.green('Profile: ' + profileTitle));
                        console.log('\tUser Name: ' + profileResults[profileTitle].username);
                        console.log('\tUser Email: ' + profileResults[profileTitle].useremail);
                        console.log('\tUser SigningKey: ' + profileResults[profileTitle].usersigningkey);

                    });
                    console.log('');
                    return Promise.resolve();
                })
                .then(() => {
                    resolve();
                    console.log(Chalk.bold.cyan('Profiles listed successfully'));
                    process.exit(0);
                })
                .catch((error) => {
                    reject(error);
                    console.log(Chalk.bold.red(error.message || error.trim()));
                    process.exit(1);
                });
        });
    }
}

module.exports = new List();