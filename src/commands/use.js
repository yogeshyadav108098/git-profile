'use strict';

// 3rd Party
const Chalk = require('chalk');
const Promise = require('bluebird');

// Internal
const Base = require('./base');


/*
    Use a user profile
*/
class Use extends Base {
    constructor() {
        super();
    }

    exec(profileTitle, commandOptions) {
        let self = this;

        return new Promise((resolve, reject) => {
            return self.convertProfileTitle(profileTitle)
                .then((profileTitle) => {
                    return self.getProfile(profileTitle);
                })
                .then((profileDetails) => {
                    return self.loadProfile(profileDetails, commandOptions.global);
                })
                .then(() => {
                    resolve();
                    console.log(Chalk.bold.cyan('Profile loaded successfully'));
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

module.exports = new Use();