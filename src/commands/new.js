const {Command, flags} = require('@oclif/core');
const inquirer = require('inquirer');
const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

class NewCommand extends Command {
  async run() {
    const {flags} = this.parse(NewCommand)

    let responses;
    if (!flags.template) {
      responses = await inquirer.prompt([
        {
          name: 'framework',
          message: 'Which framework would you like to use?',
          type: 'list',
          choices: [{name: 'Next.js'}, {name: 'React'}],
        },
        {
          name: 'name',
          message: 'What is the name of your project?',
          type: 'input',
        },
      ])
    } else {
      responses = {
        framework: 'Custom',
        name: flags.name,
      }
    }

    let createCommand = '';
    if (!flags.template) {
      if(responses.framework === 'Next.js') {
        createCommand = 'npx create-next-app';
      } else if(responses.framework === 'React') {
        createCommand = 'npx create-react-app';
      }
    } else {
      createCommand = `npx ${flags.template}`;
    }

    createCommand += ` ${responses.name}`;
    execSync(createCommand, { stdio: 'inherit' });

    // ...

  }
}

NewCommand.description = 'Create a new app'

NewCommand.flags = {
  template: flags.string({description: 'GitHub URL or npm package for the template'}),
  name: flags.string({description: 'Name of the project', required: true}),
}

module.exports = NewCommand