
hasModifiers = (input,board) => {

    if (board[input - 1].modifiers.length < 1) {
        return false;
    }
    return true;
}

calculateModifiers = (input,board) => {

    if (board[input - 1].modifiers[0].modifierType === 1) {
        let value = board[input - 1].modifiers[0].value;
        return {
            modName: "armor",
            modValue: value
        };
    }
    else if (board[input - 1].modifiers[0].modifierType === 2){
    let value = board[input - 1].modifiers[0].value;
    return {
        modName: "vulnerabilty",
        modValue: value
    };
    }

  
}
module.exports = {calculateModifiers,hasModifiers};