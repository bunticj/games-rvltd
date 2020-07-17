const {calculateAttack} = require('./calculate_attack');
const {calculateRetaliation, hasRetaliation} = require('./calculate_retaliation');

fight = (source, target, board) => {

    let sourceAttack = calculateAttack(source,target,board);
    let retaliation = 0;

    board[target-1].health -= sourceAttack; 

    if( board[target-1].health < 1){
        board[target-1].health = 0;
    }


    if(hasRetaliation(source,target,board)){
     retaliation = calculateRetaliation(source,target,board);
    board[source -1].health -=retaliation;
    if (board[source - 1] . health < 1) {
        board[source - 1].health = 0;
    }

    }

    console.log(`${board[source - 1].entityId} has attacked  ${board[target-1].entityId}
Current condition of fighters is:
${board[source - 1].entityId} has health ${board[source - 1].health}
${board[target-1].entityId} has health ${board[target-1].health}`);

}

module.exports = {fight};
