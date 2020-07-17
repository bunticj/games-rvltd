
//there are only 4 possible fighters
isValidInput = userInput => {
    switch (userInput.trim()) {
        case '1':
        case '2':
        case '3':
        case '4':
            return true;
        default:
            return false;
    }
}

//handle command line inputs
readInputFromConsole = (rl,theQuestion) => {
    return new Promise((resolve, reject) => {
        
        rl.on('line', (userInput) => {
            if (!isValidInput(userInput)) {
                rl.setPrompt(`Your input ${userInput} is invalid,please try again \n`);
                rl.prompt();
                return;
            }

            resolve(parseInt(userInput.trim()));

        });

        rl.question(theQuestion,
            (userInput) => {

                if (isValidInput(userInput)) {
                    resolve(parseInt(userInput.trim()));
                    return;
                }

                rl.setPrompt('Incorrect response,choose number in range of 1 to 4 \n ');
                rl.prompt();

            });
    });
}


module.exports = {readInputFromConsole};
