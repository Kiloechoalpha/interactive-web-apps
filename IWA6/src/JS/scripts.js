/*

// Challenge 6.1
const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }
  const primaryValid = typeof number == primaryPhone 
  const secondaryValid = typeof "number" == secondaryPhone

  console.log('Primary phone is valid numerical string:',containsOnlyNumbers('O748105141'))
  console.log('Secondary phone is valid numerical string:',containsOnlyNumbers('0219131568'))

  */
  
 
  //Challenge 6.2

const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay !== undefined && minuteOfDay !== undefined && hourOfDay === 00 && minuteOfDay === 00) {
	const taxAsDecimal =  (12/100 * 800)
    const startingAfterTax = salary * 1 - taxAsDecimal
	const balance = startingAfterTax - transport - food - rent
    console.log("R"+balance.toFixed(2))

}
	


