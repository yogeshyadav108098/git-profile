'use strict';

const Shell = require('shelljs');
const Promise = require('bluebird');
const Readline = require('readline');

let readlineInterface = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/*
    Base Command
*/
class Base {

    constructor() { }

    run(command) {
        return new Promise((resolve, reject) => {
            return Shell.exec(command, {
                silent: true,
                async: true,
                encoding: 'utf8'
            }, (code, stdout, stderr) => {
                if (stderr) {
                    return reject(stderr);
                }

                return resolve({
                    code,
                    stdout
                });
            });
        });
    }

    convertProfileTitle(profileTitle) {
        profileTitle = profileTitle.toString().split(' ').join('-');
        return Promise.resolve(profileTitle);
    }

    askUserInput(question) {
        return new Promise((resolve, reject) => {
            return readlineInterface.question(question, (userResponse) => {
                return resolve(userResponse);
            });
        });
    }

    getProfile(profileTitle) {
        let self = this;
        let command;
        let profileDetails = {
            profileTitle
        };

        return new Promise((resolve, reject) => {
            command = 'git config --global gitprofilemanager.' + profileDetails.profileTitle + '.username';
            return self.run(command)
                .then((result) => {
                    if (!result.stdout) {
                        return Promise.reject(new Error('Not able to get profile details'));
                    }
                    profileDetails.userName = result.stdout.split('\n')[0];

                    command = 'git config --global gitprofilemanager.' + profileDetails.profileTitle + '.useremail';
                    return self.run(command);
                })
                .then((result) => {
                    if (!result.stdout) {
                        return Promise.reject(new Error('Not able to get profile details'));
                    }
                    profileDetails.userEmail = result.stdout.split('\n')[0];
                    command = 'git config --global gitprofilemanager.' + profileDetails.profileTitle + '.usersigningkey';
                    return self.run(command);
                })
                .then((result) => {
                    if (!result.stdout) {
                        result.stdout = '';
                    }
                    profileDetails.userSigningKey = result.stdout.split('\n')[0];
                    resolve(profileDetails);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    checkIfProfileExists(profileTitle) {
        let self = this;
        let command;

        return new Promise((resolve, reject) => {
            command = 'git config --list';

            return self.run(command)
                .then((result) => {
                    let { code, stdout } = result;

                    if (stdout.indexOf('gitprofilemanager.' + profileTitle) > -1) {
                        return resolve(true);
                    }

                    return resolve(false);
                })
                .catch((error) => {
                    return reject(error);
                });
        });
        return Promise.resolve(false);
    }

    saveProfile(profileDetails) {
        let self = this;
        let command;

        return new Promise((resolve, reject) => {
            return Promise.resolve()
                .then(() => {
                    command = 'git config --global --unset-all gitprofilemanager.' + profileDetails.profileTitle + '.username';
                    return self.run(command);
                })
                .then(() => {
                    command = 'git config --global gitprofilemanager.' + profileDetails.profileTitle + '.username ' + profileDetails.userName;
                    return self.run(command);
                })
                .then(() => {
                    command = 'git config --global --unset-all gitprofilemanager.' + profileDetails.profileTitle + '.useremail';
                    return self.run(command);
                })
                .then(() => {
                    command = 'git config --global gitprofilemanager.' + profileDetails.profileTitle + '.useremail ' + profileDetails.userEmail;
                    return self.run(command);
                })
                .then(() => {
                    command = 'git config --global --unset-all gitprofilemanager.' + profileDetails.profileTitle + '.usersigningkey';
                    return self.run(command);
                })
                .then(() => {
                    command = 'git config --global gitprofilemanager.' + profileDetails.profileTitle + '.usersigningkey ' + profileDetails.userSigningKey;
                    return self.run(command);
                })
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    loadProfile(profileDetails, loadGlobally) {
        let self = this;
        let command;

        return new Promise((resolve, reject) => {

            return Promise.resolve()
                .then(() => {
                    command = 'git config --unset-all user.name';
                    if (loadGlobally) {
                        command = 'git config --global --unset-all user.name';
                    }
                    return self.run(command);
                })
                .then(() => {
                    command = 'git config user.name ' + profileDetails.userName;
                    if (loadGlobally) {
                        command = 'git config --global user.name ' + profileDetails.userName;
                    }
                    return self.run(command);
                })
                .then(() => {
                    command = 'git config --unset-all user.email';
                    if (loadGlobally) {
                        command = 'git config --global --unset-all user.email';
                    }
                    return self.run(command);
                })
                .then(() => {
                    command = 'git config user.email ' + profileDetails.userEmail;
                    if (loadGlobally) {
                        command = 'git config --global user.email ' + profileDetails.userEmail;
                    }
                    return self.run(command);
                })
                .then(() => {
                    command = 'git config --unset-all user.signingkey';
                    if (loadGlobally) {
                        command = 'git config --global --unset-all user.signingkey';
                    }
                    return self.run(command);
                })
                .then(() => {
                    command = 'git config --global user.signingkey ' + profileDetails.userSigningKey;
                    if (loadGlobally) {
                        command = 'git config user.signingkey ' + profileDetails.userSigningKey;
                    }
                    return self.run(command);
                })
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

module.exports = Base;