const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

let location = "RSA"
let shipping = null
let customers = 1
let currency = "R"


if (location === "RSA") { 
    shipping = 400 
     currency = 'R'
     }

else if (Country === "NAM") {
    shipping = 600 
    currency = '$'
    }

else {
    shipping = 800
    currency = '$'
}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED
let cost = shoes + toys + shirts + batteries + pens

if (cost > 1000) {

        if (location === "RSA" && customers === 1) {
			
		    shipping = 0 
            if (location === "NK") {
                console.log(BANNED_WARNING)
            }
		
	}

    if (cost > 60) {

        if (location === "NAM" && customers === 1) {
			
            shipping = 0 
        }
            if (location === "NK") {
                console.log(BANNED_WARNING)
            }
		}
	}  
   
console.log('price', currency, shoes + batteries + pens + shirts + shipping+ toys)
if (shipping === 0 && customers === 1) { 
    console.log(FREE_WARNING) 
}