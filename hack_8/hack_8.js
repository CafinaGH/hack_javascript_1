/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo", "bar", "baz", "qux", "echo"];
let result = [];
let middle = [];

for (let i = 1; i < 4; i++) {
    middle.push(arr[i]);
}

result = middle.map(function(element) {
    if (element === "qux"){
        return element.toUpperCase();}
    else {
        return element.replace(/a/g, "@");}
});
console.log(result);
//export result
module.exports = result;