const { readInputFromConsole } = require('./input_handling');
const readline = require('readline');




chooseFighters = async () => {
    //create readline interface 
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let sourceId = await readInputFromConsole(rl, `Choose your source fighter from 1 to 4   `);
    let targetId = await readInputFromConsole(rl, `Choose your target fighter from 1 to 4, but different than source fighter  `);
    while (sourceId === targetId) {
        targetId = await readInputFromConsole(rl, `You can't choose same fighters. Choose another target fighter   `);
    }
    rl.close();

    return [sourceId, targetId];

}


module.exports = {
    chooseFighters,
}
