
//check are fighters healthy
isHealthy = (source, target, board) => {
    if (board[source - 1].health < 1) {
        console.log(`You can't choose dead fighter`);
        return false;
    }
    if (board[target - 1].health < 1) {
        console.log(`You can't attack dead fighter`);
        return false;
    }
    //all fighters are healthy enough 
    return true;
}

checkEntityType = (source, board) => {
    if (board[source - 1].entityType === 1) {
        return "creature";
    }
    if (board[source - 1].entityType === 2) {
        return "avatar";
    }
}

isAvatarAttackReady = (source, board) => {
    if (board[source - 1].attackReady === true) {
        return true;
    }
    return false;

}

//calling functions to check on one place is it valid
isValid = (source, target, board) => {
    if (!isHealthy(source, target, board)) {
        return false;
    }
    if (checkEntityType(source, board) === "creature" && checkEntityType(target, board) === "avatar") {
        console.log(`Creature cannot attack Avatar!`);
        return false;
    }
    if(!isAvatarAttackReady(source, board)){
        console.log(`Your Avatar is not ready for attack. Wait for the next round.`);
        return false;
    }

    console.log(`Fight!`);
    return true;
}

//print after successful choosing
printSuccess = (sourceId, targetId, sourceType, targetType, board) => {
    sourceType = checkEntityType(sourceId, board);
    targetType = checkEntityType(targetId, board);
    console.log(`${board[sourceId - 1].entityId} of type "${sourceType}" is attacking ${board[targetId - 1].entityId} of type "${targetType}"
${board[sourceId - 1].entityId} has attack of ${board[sourceId - 1].attack} and health ${board[sourceId - 1].health}
${board[targetId - 1].entityId} has attack of  ${board[targetId - 1].attack} and health  ${board[targetId - 1].health}  `);
}
module.exports = {
    isValid,
    printSuccess
};