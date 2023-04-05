/*/Challenge 7.1
const value = 3
console.log(value + 4 + value)*/

/*//Challenge 7.2
const nickname= "Timmy";
const firstname = "Timothy";

if (nickname == undefined &&  firstname === "Timothy" ) {
    console.log("Good Morning, " + firstname + "!")
}

if (firstname == undefined &&  nickname === "Timmy" ) {
    console.log("Good Morning, " + nickname + "!")   
}

console.log("Good Morning, " + nickname + "!" || firstname + "!")


*/

//Challenge 7.3

const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)

