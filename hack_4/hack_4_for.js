/**
 * mediante el loop for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
for (let i = 0; i<8; i++) {
    if(i%2 == 0) {
        console.log("Numero par :) " + i)
    } else {
    result.push(i)
    console.log(result);
    }
}

//export result
module.exports = result;