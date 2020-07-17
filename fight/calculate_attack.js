const {
    calculateModifiers,
    hasModifiers
} = require('./check_modifiers');


calculateAttack = (source, target, board) => {
    let sourceFighterAttack = board[source-1].attack;

    if (hasModifiers(target, board)) {
        let targetModifierObj = calculateModifiers(target, board);

        if (targetModifierObj.modName === 'vulnerabilty') {
            sourceFighterAttack = board[source - 1].attack + targetModifierObj.modValue
        }
        else {
            sourceFighterAttack = board[source - 1].attack - targetModifierObj.modValue
            if (sourceFighterAttack < 1) {
                sourceFighterAttack = 0;
            }
        }
    }
    console.log(`The value of source attack with all modifiers is  ${sourceFighterAttack}`);

    return sourceFighterAttack;
}



module.exports = {calculateAttack};