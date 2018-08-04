'use strict';

// 3rd Party
const Chalk = require('chalk');
const Promise = require('bluebird');

// Internal
const Base = require('./base');


/*
    Reove a user profile
*/
class Remove extends Base {
    constructor() {
        super();
    }

    exec(profileTitle) {
        let self = this;
        return new Promise((resolve, reject) => {
            return self.convertProfileTitle(profileTitle)
                .then((profileTitle) => {
                    let command = 'git config --global --remove-section gitprofilemanager.' + profileTitle;
                    return self.run(command);
                })
                .then(() => {
                    resolve();
                    console.log(Chalk.bold.cyan('Profile removed successfully'));
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

module.exports = new Remove();