require('colors');

const {
    inquirerMenu,
    inquirerPause,
    readInput
} = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

console.clear();

const main = async () => {

    let opt = '';
    const tasks = new Tasks();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Description: ');
                tasks.createTask(desc);
                break;
            case '2':
                console.log(tasks._list)
                break;
        }

        await inquirerPause();
    } while (opt !== '0');

}

main();