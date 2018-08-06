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
    .command('current')
    .option('-g, --global', 'List current profile globally')
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
    .option('-g, --global', 'Use profile globally')
    .description('Use existing git profile')
    .action(Commands.use.exec.bind(Commands.use));

Program
    .command('*')
    .description('Unsupported command')
    .action(() => {
        console.error('Invalid command: %s\nSee --help for a list of available commands.', Program.args.join(' '));
        process.exit(0);
    });

Program
    .version('1.0.0', '-v, --version')
    .description('Git Profile manager')
    .parse(process.argv);