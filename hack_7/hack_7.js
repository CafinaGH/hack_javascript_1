/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let firstChar = str.charAt(0).toUpperCase();
    let rest = str.slice(1);
    result.push(firstChar + rest);
    console.log(result);
}

//export result
module.exports = result;