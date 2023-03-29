import { company } from './configuration.js';
import { year } from './configuration.js';

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message

// Challenge 1 Solution for IWA4

let date = '2050';
let rank = "parent";
let count = 0;

if (date = "2050") {
    console.log("January", 'New Year’s Day')
    console.log("March", 'Human Rights Day')
    date = 'April'
    console.log(date, 'Family Day')
    console.log(date, 'Freedom Day')
    count += 4

    if (rank = false) {
        console.log('June', 'Youth Day')
        count += 1
    }

    console.log('August', 'Women’s Day')
    console.log('September', 'Heritage Day')
    date = 'December'
    console.log(date, 'Day of Reconciliation')
    count += 3

    if (rank = "parent") {
        console.log(date, 'Christmas Day')
        count += 1
    }

    console.log(date, 'Day of Goodwill')
    count += 1
}
date = '2050'

console.log('Your status is:', rank)
console.log('The year is:', date)
console.log('The total holidays is:', count)

