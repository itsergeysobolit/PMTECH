// Task 1 

console.log(2 + "2" == "2" + 2); // true, number + string => string | string "22" == string "22"
console.log(2 + "3" == "3" + 2); // false, string "23" == string "32"
console.log("3" + "2" == 3 + 2); // false, string "32" == number 32
console.log("3" + "2" == "3" + 2); // true, string "32" == string "32"
console.log("3" + "2" == 2 + "3"); // false, string "32" == string "23"
console.log(2 + Number("3") == Number("3") + 2); //true, number 5 == number 5

console.log(12 / "6"); // 2, reduce to numbers by division
console.log("number" + 15 + 3); // string "number153" | string + number => string
console.log(15 + 3 + "number"); // string "18number" | 15 + 3 => 18 | number 18 + string "number" => string "18number" 
console.log([1] > null); // true, [1] as an array
console.log("foo" + + "bar"); // string "fooNaN", +"bar" => NaN | "foo" + NaN => "fooNaN"
console.log('true' == true); // false, when comparing values of different types, JS converts each to a number 
console.log(false == 'false'); // false
console.log(null == ''); // false, only null == undefined => true
console.log(!!"false" == !!"true"); // true, !!"false" => true | !!"true" => true
console.log(['x'] == 'x'); //true

// Task 2

const enemy = {
    name: "Bob"
}; // object enemy with property name

const friend = {
    name: "Alex"
}; // object friend with property name

const me = friend; // the link is copied

me.name = "Bob"; // assigned name "Bob"

console.log(friend.name); // Bob
console.log(me === friend); // true, two objects are equal only if they are the same object
console.log(me === enemy); // false

// Task 3

let monthNumber = prompt('Enter the month number:', '');

const namesOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

if (+monthNumber >= 1 && +monthNumber <= 12) {
    alert(namesOfMonths[monthNumber - 1]);
} else {
    monthNumber = monthNumber[0].toUpperCase() + monthNumber.slice(1);
    switch (monthNumber) {
        case 'January':
            alert('1');
            break;
        case 'February':
            alert('2');
            break;
        case 'March':
            alert('3');
            break;
        case 'April':
            alert('4');
            break;
        case 'May':
            alert('5');
            break;
        case 'June':
            alert('6');
            break;
        case 'July':
            alert('7');
            break;
        case 'August':
            alert('8');
            break;
        case 'September':
            alert('9');
            break;
        case 'October':
            alert('10');
            break;
        case 'November':
            alert('11');
            break;
        case 'December':
            alert('12');
            break;
        default:
            alert('Month entered incorrectly');
    }
}



