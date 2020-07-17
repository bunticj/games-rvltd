const readline = require('readline');

module.exports.playMore = async () => {

    const rl2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl2.question('Do you want to play more?Press "y" if you do. ', answer => {

          
            if (answer === 'y'){
                console.log('Lets play again');
                resolve(answer);
                rl2.close();

                return true;
            }
            else {
                rl2.close();

                return  false;
            }


        });
    });

}