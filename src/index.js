#!/usr/bin/env node
'use strict';

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
    .version('1.0.0', '-v, --version')
    .description('Git Profile manager')
    .parse(process.argv);
