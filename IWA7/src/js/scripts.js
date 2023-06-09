
//Challenge 7.1
const value = 3
console.log(value + 4 + value)



//Challenge 7.2
const nickname= "Timmy";
const firstname = "Timothy";
//const message = "Good Morning!";

if (nickname ) {
    console.log(`Good morning, ${nickname}!`);
  }
else if (firstname ) {
    console.log(`Good morning, ${firstname}!`);
  } 
else {
    console.log("Good morning!");
  }


/*

//-------------------ANOTHER WAY---------------------------------------

const nickname= "Timmy";
const firstname = "Timothy";

console.log(`Good Morning, ${nickname}!`)


if (nickname === undefined &&  firstname === "Timothy" ) {
    console.log("Good Morning, " + firstname + "!")
}

if (firstname === undefined &&  nickname === "Timmy" ) {
    console.log("Good Morning, " + nickname + "!")   
}

if (firstname === undefined &&  nickname === "Timmy"){
    console.log(message)
}
*/


//Challenge 7.3

const leoName = 'Leo'
const leoSurname = 'Musvaire      '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line--

const owed = parseInt(-1 * leoBalance) + parseInt(-1 * sarahBalance);
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${parseInt(-leoBalance).toFixed(2)})\n`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${parseInt(-sarahBalance).toFixed(2)})\n`;
const total = `  Total amount owed: R ${owed.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
//const result = `\n${leo}${sarah}${divider}\n${total}\n${divider}`;
const result = ` 
${leo} 
${sarah} 
${divider} 
${total} 
${divider}
 `

console.log(result);



