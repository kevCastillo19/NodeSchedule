const inquirer = require('inquirer');
require('colors');

const questions = [{
    type: 'list',
    name: 'option',
    message: 'What are you doing?',
    choices: [{
            value: '1',
            name: '1. Create task'
        },
        {
            value: '2',
            name: '2. List tasks'
        },
        {
            value: '3',
            name: '3. List completed tasks'
        },
        {
            value: '4',
            name: '4. List pending tasks'
        },
        {
            value: '5',
            name: '5. Complete task'
        },
        {
            value: '6',
            name: '6. Delete task'
        },
        {
            value: '0',
            name: '0. Exit'
        }
    ]
}];

const inquirerMenu = async () => {
    console.clear();
    console.log('==================='.green);
    console.log('   Schedule Node '.green);
    console.log('===================\n'.green);

    const {
        option
    } = await inquirer.prompt(questions);

    return option;
}

const questionEnd = [{
    type: 'input',
    name: 'enter',
    message: `\nPress ${'Enter'.green} to continue\n`,
}];

const inquirerPause = async () => {

    await inquirer.prompt(questionEnd);

}

const readInput = async (message) => {
    const questionOpt = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor ingrese un mensaje';
            }
            return true;
        }
    }]

    const {
        desc
    } = await inquirer.prompt(questionOpt);
    return desc;
}

module.exports = {
    inquirerMenu,
    inquirerPause,
    readInput
}