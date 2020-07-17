const {
    calculateModifiers,
    hasModifiers
} = require('./check_modifiers');


hasRetaliation = (src, target, board) => {
    //if avatar attacks avatar, no retaliation
    if (board[src - 1].entityType === 2 && board[target - 1].entityType === 2) {
        console.log('It has no retaliation');
        return false;
    }
    console.log('Get ready for retaliation');
    return true;
}


calculateRetaliation = (src, target, board) => {
    let targetAttack = board[target - 1].attack;

    if (hasModifiers(src, board)) {
        let srcModifierObj = calculateModifiers(src, board);

        if (srcModifierObj.modName === 'vulnerabilty') {
            targetAttack = board[target - 1].attack + srcModifierObj.modValue
        } else {
            targetAttack = board[target - 1].attack - srcModifierObj.modValue
            if (targetAttack < 1) {
                targetAttack = 0;
            }
        }
    }
    console.log(`The value of target retaliation attack on source with all modifiers is ${targetAttack}`);

    return targetAttack;

}


module.exports = {
    hasRetaliation,
    calculateRetaliation
};