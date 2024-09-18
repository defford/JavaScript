// QUESTION 1
// Given r (radius) of a circle, calculate the area of a circle (A = π * r * r).

// M1
function area(radius) {
    let totalArea = radius * radius * Math.PI
    return console.log(totalArea)
} 

// M2
const totalArea2 = function (radius) {
    return console.log(radius * radius * Math.PI)
}

// M3
const totalArea = (radius) => console.log(radius * radius * Math.PI);

// QUESTION 2
// Simulate rolling a dice using random(). The function should allow the caller to specify any number of sides, 
// but default to 6 if no side count is given: roll() (assume 6 sided, return random number between 1 and 6) vs. roll(50) 
// (50 sided, return number between 1 and 50).
// [You might need Math class or specifically Math.random() to produce a random number in JavaScript]

// Method 1
function roll(sides=6) {
    const rollResult = (Math.random() * sides).toFixed(0)
    if (rollResult == 0) {
        rollResult += 1
    }
    return rollResult
}

// Method 2
let rollResult2 = function (sides) {
    return (Math.random() * sides).toFixed(0)
}

// Method 3
let rollResult3 = (sides=6) => (Math.random() * sides).toFixed(0)



// QUESTION 3
// Write a function that converts values in Celcius to Farenheit: convert(0) should return "32 F".

// M1
function CfResult1(c) {
    let f = (c * 9/5) + 32;
    return f + " F";
}
// M2
let CfResult2 = function (c) {
    let f = (c * 9/5) + 32;
    return f + " F";
}
// M3
let CfResult3 = (c) => ((c * 9/5) + 32) + " F"

// QUESTION 4
// Modify your solution to the previous function to allow a second argument: "F" or "C", 
// and use that to determine what the scale of the value is, converting to the opposite: convert(122, "F") 
// should return "50 C".

// M1
function tempConvert1(temp, deg) {
    if (deg === "F") {
        return (temp * 9/5) + 32;
    } else {
        return (temp - 32) * 5/9;
    }
}
// M2
let tempConvert2 = function (temp, deg) {
    if (deg === "F") {
        return (temp * 9/5) + 32;
    } else {
        return (temp - 32) * 5/9;
    }
}
// M3
let tempConvert3 = (temp, deg) => {
    if (deg === "F") {
        return (temp * 9/5) + 32;
    } else {
        return (temp - 32) * 5/9;
    }
};

// QUESTION 5
// Function taking any number of arguments (Numbers), returning true if they are all less than 50: 
// isUnder50(1, 2, 3, 5, 4, 65) should return false.

// M1
function isUnder50a (...nums) {
    for (i=0; i<nums.length; i++) {
        if (nums[i] >= 50) {
            return false
        } 
    }
    return true
}
// M2
let isUnder50b = function (...nums) {
    for (i=0; i<=nums.length; i++) {
        if (nums[i] >= 50) {
            return false
        } else {
        }
    }
    return true
}
// M3
let isUnder50c = (...nums) => {
    for (i=0; i<=nums.length; i++) {
        if (nums[i] >= 50) {
            return false
        } 
    }
    return true
}

// QUESTION 6
// Function allowing any number of arguments (Numbers), returning their sum: sum(1, 2, 3) should return 6.

// M1
function mySum1 (...nums) {
    let total = 0;
    nums.forEach(num => total += num);
    return total;
}
// M2
let mySum2 = function (...nums) {
    let total = 0;
    nums.forEach(num => total += num);
    return total;
}
// M3
let mySum3 = (...nums) => {
    let total = 0;
    nums.forEach(num => total += num);
    return total;
}

// QUESTION 7
// Function to check if a number is a multiple of 3 (returns true or false)

// M1
function mOf3a (num) {
    if (num % 3 != 0) {
        return false
    }
    return true
}
// M2
let mOf3b = function (num) {
    if (num % 3 != 0) {
        return false
    }
    return true   
}
// M3
let mOf3c = (num) => {
    if (num % 3 != 0) {
        return false
    }
    return true
}

// QUESTION 8
// Function to subtract a discount % from a total. If no % is given, return the original value.

// M1
function discount1 (amt, per=0) {
    let total = amt - (amt * (per / 100))
    return total
}
// M2
let discount2 = function (amt, per=0) {
    let total = amt - (amt * (per / 100))
    return total
}
// M3
let discount3 = (amt, per=0) => amt - (amt * (per / 100))

// QUESTION 9
// Function that takes a number of seconds as a Number, returning a String formatted like "X Days, Y Hours, Z Minutes" 
// rounded to the nearest minute.

// M1
function timeString1(seconds) {
    if (seconds < 30) return "less than a minute";
    const mins = Math.floor(seconds / 60) + 1, hours = Math.floor(seconds / 3600), days = Math.floor(seconds / 86400);
    return seconds < 3600 ? `0 Days, 0 Hours, ${mins} Minutes` :
           seconds < 86400 ? `0 Days, ${hours} Hours, ${mins % 60} Minutes` :
           `${days} Days, ${hours % 24} Hours, ${mins % 60} Minutes`;
}

// M2
let timeString2 = function (seconds) {
    if (seconds < 30) return "less than a minute";
    const mins = Math.floor(seconds / 60) + 1, hours = Math.floor(seconds / 3600), days = Math.floor(seconds / 86400);
    return seconds < 3600 ? `0 Days, 0 Hours, ${mins} Minutes` :
           seconds < 86400 ? `0 Days, ${hours} Hours, ${mins % 60} Minutes` :
           `${days} Days, ${hours % 24} Hours, ${mins % 60} Minutes`;
}
// M3
let timeString3 = seconds => {
    if (seconds < 30) return "less than a minute";
    const mins = Math.floor(seconds / 60) + 1, hours = Math.floor(seconds / 3600), days = Math.floor(seconds / 86400);
    return seconds < 3600 ? `0 Days, 0 Hours, ${mins} Minutes` :
           seconds < 86400 ? `0 Days, ${hours} Hours, ${mins % 60} Minutes` :
           `${days} Days, ${hours % 24} Hours, ${mins % 60} Minutes`;
}

// QUESTION 10
// Modify your solution above to only include units that make sense: 
// "1 Minute" vs. "3 Hours, 5 Minutes" vs. "1 Day, 1 Hour, 56 Minutes" etc

// M1
function timeStringTrim1(seconds) {
    if (seconds < 30) return "less than a minute";
    const mins = Math.floor(seconds / 60) + 1, hours = Math.floor(seconds / 3600), days = Math.floor(seconds / 86400);
    return seconds < 3600 ? `${mins} Minutes` :
           seconds < 86400 ? `${hours} Hours, ${mins % 60} Minutes` :
           `${days} Days, ${hours % 24} Hours, ${mins % 60} Minutes`;
}
// M2
let timeStringTrim2 = function (seconds) {
    if (seconds < 30) return "less than a minute";
    const mins = Math.floor(seconds / 60) + 1, hours = Math.floor(seconds / 3600), days = Math.floor(seconds / 86400);
    return seconds < 3600 ? `${mins} Minutes` :
           seconds < 86400 ? `${hours} Hours, ${mins % 60} Minutes` :
           `${days} Days, ${hours % 24} Hours, ${mins % 60} Minutes`;
}
// M3
let timeStringTrim3 = seconds => {
    if (seconds < 30) return "less than a minute";
    const mins = Math.floor(seconds / 60), hours = Math.floor(seconds / 3600), days = Math.floor(seconds / 86400);
    return seconds < 3600 ? `${mins} Minutes` :
           seconds < 86400 ? `${hours} Hours, ${mins % 60} Minutes` :
           `${days} Days, ${hours % 24} Hours, ${mins % 60} Minutes`;
}