import {company} from './configuration.js';
import {year} from './configuration.js';

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message

let date = '2050';
let rank = "student";
let count = "0";

if (date = "2050") {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	 count = count + 4

	if (rank = "student" ) {
	  console.log('June', 'Youth Day')
	  count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	count = count + 3

	if (rank = "parent") {
	  console.log(date, 'Christmas Day')
	  count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	count = count + 1
}
date = '2050'

console.log('Your status is:', rank)
console.log('The year is:', date)
console.log('The total holidays is:', count)

