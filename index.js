const maxNumber= 100;
let count = 1;
let output = "";
let changed = false;

function replaceNumberWithWord(count, divider, word){
    if(count % divider === 0){
        output = output + word;
        changed = true;
    }
}

while(count <= maxNumber){

    replaceNumberWithWord(count, 3, "Fizz"); 
    replaceNumberWithWord(count, 5, "Fuzz");
    replaceNumberWithWord(count, 7, "Fish");
    replaceNumberWithWord(count, 8, "Bus");

    if(changed === false){ //if we are not chaning into a word then output the number instead
        output = count;
    }

    console.log(output);
    changed = false;
    output = ""; //reset output to blank
    count++; //go to the next number to test
}

function gcd(a, b) {
    return !b ? a : gcd(b, a % b); // calculate greatest common divider recursive function works down until b = 0
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);    // calculate lowest common multiple
}

function lcmOfRange(arr){ //calculates a lcm of a range of numbers passed into the function using an array
    multiple = arr[0];
    for(let i = 0; i< arr.length; i++){
        multiple = lcm(multiple, arr[i]);
    }
    return multiple;
}

console.log(lcmOfRange([3,5,7,8]));
