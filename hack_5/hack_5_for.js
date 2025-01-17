/**
 * mediante el loop for agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
for (let i = 8; i>0; i--) {
    if(i%2 == 0) {
        console.log("Numero par :) " + i)
    } else {
    result.push(i)
    console.log(result);
    }
}
//export result
module.exports = result;