const fs = require('fs');

//writejson
writeFsJson = (board, boardJson) => {
    fs.writeFile(boardJson, JSON.stringify(board), function writeJSON(err) {
        if (err) return console.log(err);
        JSON.stringify(board, null, 2);

    });
}


attackReadyChange = (src, board) => {
   board.forEach(element => {
       element.attackReady = true;
   });
     
  board[src - 1].attackReady = false;
      
   
        
    
}
module.exports = {
    writeFsJson,
    attackReadyChange
};