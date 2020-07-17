const {
    chooseFighters
} = require('./before_fight/choose_fighters');
const {
    printSuccess,
    isValid
} = require('./before_fight/fighter_validations');
const {
    fight
} = require('./fight/fight');
const {
    playMore
} = require('./after_attack/play_more');
const {
    writeFsJson,
    attackReadyChange

} = require('./after_attack/handle_json');
const fs = require('fs');
let boardJson = './board.json';
let content = fs.readFileSync(boardJson);
let board = JSON.parse(content);


let roundCounter = 1;

//app flow
main = async () => {
    console.log('Current board:', board);
    let inputs = await chooseFighters();
    while (!isValid(inputs[0], inputs[1], board)) {
        inputs = await chooseFighters();
    }
    let sourceId = inputs[0],
        targetId = inputs[1],
        sourceType,
        targetType;

    printSuccess(sourceId, targetId, sourceType, targetType, board);
    console.log('Round ', roundCounter);

    fight(sourceId, targetId, board);
    attackReadyChange(sourceId, board);
    writeFsJson(board, boardJson);

    //play again
    let play = await (playMore());
    if (play) {
        roundCounter++;
        main();
    }


}

main();