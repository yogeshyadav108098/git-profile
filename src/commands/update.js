'use strict';

// 3rd Party
const Chalk = require('chalk');
const Promise = require('bluebird');
const EmailValidator = require('email-validator');

// Internal
const Base = require('./base');


/*
    Update a user profile
*/
class Update extends Base {
    constructor() {
        super();
    }

    exec(profileTitle) {
        let self = this;
        let profileDetails = {};
        return new Promise((resolve, reject) => {
            return self.convertProfileTitle(profileTitle)
                .then((profileTitle) => {
                    profileDetails.profileTitle = profileTitle;
                    return self.checkIfProfileExists(profileTitle);
                })
                .then((profileExists) => {
                    if (!profileExists) {
                        throw new Error('Profile does not exist with given name');
                    }
                    return self.askUserInput('Enter user name: ');
                })
                .then((userName) => {
                    if (!userName) {
                        throw new Error('User name is mandatory');
                    }
                    profileDetails.userName = userName;
                    return self.askUserInput('Enter email: ');
                })
                .then((userEmail) => {
                    if (!userEmail || !EmailValidator.validate(userEmail)) {
                        throw new Error('User right email format is mandatory');
                    }
                    profileDetails.userEmail = userEmail;
                    return self.askUserInput('Enter SigningKey: ');
                })
                .then((userSigningKey) => {
                    profileDetails.userSigningKey = userSigningKey;
                    return self.saveProfile(profileDetails);
                })
                .then(() => {
                    resolve();
                    console.log(Chalk.bold.cyan('Profile updated successfully'));
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

module.exports = new Update();