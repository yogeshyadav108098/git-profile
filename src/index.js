#!/usr/bin/env node
'use strict';

const Chalk = require('chalk');
const Program = require('commander');

const Commands = require('./commands');

Program
    .command('add')
    .description('Add new git profile')
    .action(Commands.add.exec.bind(Commands.add));

Program
    .command('list')
    .description('List git profiles')
    .action(Commands.list.exec.bind(Commands.list));

Program
    .command('current')
    .description('List current profile')
    .action(Commands.current.exec.bind(Commands.current));

Program
    .command('remove <profileTitle>')
    .description('Remove existing git profile')
    .action(Commands.remove.exec.bind(Commands.remove));

Program
    .command('update <profileTitle>')
    .description('Update existing git profile')
    .action(Commands.update.exec.bind(Commands.update));

Program
    .command('use <profileTitle>')
    .description('Use existing git profile')
    .action(Commands.use.exec.bind(Commands.use));

Program
    .command('*')
    .action(() => {
        console.log(Chalk.bold.red('No command provided\n') + Chalk.bold.green('Try git-profile-manager -h'));
        process.exit(0);
    });

Program
    .version('1.0.0', '-v, --version')
    .description('Git Profile manager')
    .parse(process.argv);