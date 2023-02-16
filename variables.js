var varVariable = 1
console.log(varVariable)
var varVariable = "Atif" // possible only with var
console.log(varVariable)

{
    var varVariable = false
    console.log(varVariable)
}
console.log(varVariable)



let letVariable = 1
console.log(letVariable)
    // let letVariable = "Atif" // Not be redeclared in a single block
    {
        let letVariable = false
        console.log(letVariable)
    }
    // letVariable remains 1 not false which was redeclared in {}
console.log(letVariable)

{
    letVariable = true
    console.log(letVariable)
}
// letVariable Changed
console.log(letVariable)


const constVariable = 10
console.log(letVariable)
    // constVariable = false // Not Allowed with ConsT