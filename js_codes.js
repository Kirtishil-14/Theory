//max occurance of char in str
var getMax = function (str) {
  var max = 0,
    maxChar = "";
  str.split("").forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length;
      maxChar = char;
    }
  });
  console.log(maxChar, max);
};

getMax("aaaabbbbbbcd");

//max number in arr
function myFunction(a) {
  return Math.max(...a);
}
myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//negative nos in array
var narr = [2, -3, 5, -7];
console.log(narr.filter((el) => el < 0).length);

//reduce example
/* 
input = [1,'b'],['a',2]
output = {1:'a',b:2}
a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
----------------------------------------------------------------
input = {a:1,b:2,c:3}
output = 6
Object.values(a).reduce((sum, cur) => sum + cur, 0);
 */

/* 
input = 'm', 'how many times does the character occur in this sentence?'
output = 2
b.split(a).length - 1
*/

//Array
//foreach
var arrr = [2, 4, 6, 7, 8];
arrr.forEach(function (item, index, array) {
  console.log(item, index);
});

//copy array
let copy1 = arrr.slice();
let copy2 = Array.from(arrr);
let copy3 = JSON.parse(JSON.stringify(arrr));

let arr = ["1", "Test User", "25", "Developer"];
let arr1 = [
  ["id", "1"],
  ["name", "Test User"],
  ["age", "25"],
  ["profession", "Developer"],
];

//Method 1: Using Object.assign() method
console.log(Object.assign({}, arr));
//{0: "1", 1: "Test User", 2: "25", 3: "Developer"}

// Method 2 Using Spread operator
console.log({
  ...arr,
});
//{0: "1", 1: "Test User", 2: "25", 3: "Developer"}

// Method 3: Using Object.fromEntries() method
console.log(Object.fromEntries(arr1));
//{id: "1", name: "Test User", age: "25", profession: "Developer"}

//Object
let obj = {
  id: "1",
  name: "Test User",
  age: "25",
  profession: "Developer",
};

//Method 1: Convert the keys to Array using - Object.keys()
console.log(Object.keys(obj));
// ["id", "name", "age", "profession"]

// Method 2 Converts the Values to Array using - Object.values()
console.log(Object.values(obj));
// ["1", "Test User", "25", "Developer"]

// Method 3 Converts both keys and values using - Object.entries()
console.log(Object.entries(obj));
//[["id", "1"],["name", "Test User"],["age", "25"],["profession", "Developer"]]

//functions
function prime() {
  const num = parseInt(prompt("enter numbr "));
  let isprime = true;
  if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isprime = false;
        break;
      }
    }
    if (isprime == true) console.log("prime number");
    else console.log("not prime number");
  } else {
    console.log("not prime number");
  }
}

function factorial(no, type) {
  if (type == "with") {
    if (no === 0) {
      return 1;
    }
    return no * factorial(no - 1);
  } else if (type == "without") {
    let fact = 1;
    for (i = 1; i <= no; i++) {
      fact = fact * i;
    }
    console.log(`the factorial of ${no} is ${fact}`);
  }
}

function armstrong(n) {
  const b = parseInt(prompt("enter number"));
  let sum = 0;
  let temp = b;
  while (temp > 0) {
    let rem = temp % 10;
    sum = sum + rem * rem * rem;
    temp = parseInt(temp / 10);
  }
  if (sum == b) console.log("armstrong number");
  else console.log("not armstrong");

  let strN = n + "";
  let power = strN.length;
  let sum1 = 0;
  for (let i = 0; i < strN.length; i++) {
    sum1 += Math.pow(Number(strN[i]), power);
  }
  return sum1 === n;
}

function fibonacci() {
  const c = parseInt(prompt("enter number"));
  let n1 = 0,
    n2 = 1,
    n3;
  for (i = 1; i <= c; i++) {
    console.log(n1);
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }
}

function palindrome(type) {
  if (type == "str") {
    var a = "Kirtishil";
    var b = a.split("").reverse().join("");
    if (a === b) console.log("palin");
    else console.log("not palin");

    function palin(str) {
      let reversed = ``;
      for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
      }
      return str === reversed ? `It's a palindrome` : `It's not a palindrome`;
    }

    function palin(str) {
      let isPalindrome = true;
      for (let a = 0, b = str.length - 1; a <= b; a++, b--) {
        if (str[a] !== str[b]) {
          isPalindrome = false;
        }
      }
      return isPalindrome ? "It's a palindrome" : "It's not a palindrome";
    }

    let word = "CivIc";
    let str = word.toLowerCase();

    function checkPalindrome(str) {
      // find the length of the string
      const len = str.length;
      // loop through half of the string
      for (let i = 0; i < len / 2; i++) {
        // check each position
        // between the first and the last character
        if (str[i] !== str[len - 1 - i]) {
          console.log("NOT a palindrome");
        }
      }
      console.log("The string is a palindrome");
    }
  } else if (type == "num") {
    var a = parseInt(prompt("enter number"));
    var temp = a;
    let rem,
      rev = 0;
    while (temp > 0) {
      rem = temp % 10;
      rev = rev * 10 + rem;
      temp = parseInt(temp / 10);
    }
    if (rev == a) console.log("palin");
    else console.log("not palin");
  } else if (type == "arr") {
    let palindromeArray = (arr) => {
      //initialize to true
      let isPalindrome = true;

      //loop through half length of the array
      for (let i = 0; i < arr.length / 2; i++) {
        //check if first half is equal to the second half
        if (arr[i] !== arr[arr.length - i - 1]) {
          isPalindrome = false;
          break;
        }
      }

      return isPalindrome;
    };
    console.log(palindromeArray([1, 2, 1]));

    console.log(checkPalindrome([1, 3, 5, 3, 1]));

    function checkPalindrome(arr) {
      const len = arr.length;
      if (len % 2 == 0) return false;

      for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - i - 1]) return false;
      }
      return true;
    }
  }
}

function bubbleSort() {
  var arr = [32, 12, 54, 23];
  var temp = 0;
  var n = arr.length;
  for (i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      if (arr[j - 1] > a[j]) {
        temp = arr[j - 1];
        arr[j - 1] = a[j];
        arr[j] = temp;
      }
    }
  }
}

function minMax() {
  array = [50, 60, 20, 10, 40];
  minValue = Infinity;
  maxValue = -Infinity;

  for (item of array) {
    // find minimum value
    if (item < minValue) minValue = item;

    // find maximum value
    if (item > maxValue) maxValue = item;
  }
}

function maxOccureance() {
  const maxChar1 = (str) => {
    const myStr = str.toLowerCase();
    const charMap = {};
    let max = 0;
    let maxChar = "";

    for (let char of myStr) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }

    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }

    return maxChar;
  };
  console.log(maxChar1("aasss"));

  const str = "helloyyyworld"; // input string
  let max = 0; // variable to store the number of appearances of the max char so far
  let maxChars = []; //array to store to the max char(s) in case of multiple characters
  const charCount = new Array(26).fill(0); // initialize a fixed sized array and fill it with zeros
  // iterate over all the characters and add the count to charCount - just like a hash map
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i) - 97; //97 is ASCII value of 'a'
    charCount[ch]++;
    if (charCount[ch] > max) {
      maxChars = [str.charAt(i)];
      max = charCount[ch];
    } else if (charCount[ch] === max) maxChars.push(str.charAt(i));
  }
  console.log(maxChars.toString(), max);

  function maxChar(str) {
    const chars = {};
    let max = 0;
    let maxChar = "";
    for (let char of str) {
      if (!chars[char]) {
        chars[char] = 1;
      } else {
        chars[char]++;
      }
    }
    for (let char in chars) {
      if (chars[char] > max) {
        max = chars[char];
        maxChar = char;
      }
    }
    return maxChar;
  }

  maxChar("abcccccccd");
}

function arrSort() {
  var a = [6, 3, 1, 2, 5, 87, 45, 3];
  var len = a.length;
  for (let i = 0; i < len - 1; i++) {
    if (a[i] > a[i + 1]) {
      let temp = a[i];
      a[i] = a[i + 1];
      a[i + 1] = temp;

      i = -1;
    }
  }
  console.log(a);
}

function removeDuplicates(array) {
  let unique = [...new Set(array)];
  console.log(unique);
  const arr = [1, 2, 3, 1, 2];
  removeDuplicates(arr);
}

function merge(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  let unique = [...new Set(arr)];
  console.log(unique);
  // const arr1 = [1, 2, 3]
  // const arr2 = [3, 4, 5]
  merge(arr1, arr2);
}

function binarySearch(sortedArray, key) {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;

  const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const guess = list[mid];

      if (guess === item) {
        return mid;
      }

      if (guess > item) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return null; //if not found
    console.log(binarySearch([1, 2, 3, 4, 5, 7, 8, 9], 5));
  };
}

//console
console.log(!!null); //false
console.log(!!""); //false
console.log(!!1); //true
console.log("1" - -"1"); //2
console.log("1" + -"1"); //'1-1'
console.log(null == undefined); //true
console.log(null === undefined); //false

//typeof
console.log(typeof typeof 1); //string
console.log(typeof abc);
console.log(typeof String);
console.log(typeof Boolean);
console.log(typeof "Kirtishil");
console.log(typeof 358);
console.log(typeof NaN);
console.log(typeof false);
console.log(typeof [1, 2, 3]);
console.log(typeof { name: "Kirtishil", age: 24 });
console.log(new Date());
console.log(function () { });
console.log(typeof null);

//arr
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers); //[1, 2, 3, 7 x empty, 11]

// falsy values
/*
undefined
null
NaN
0
""
false
*/

//math function
/*
Math.round(11.49)
11
Math.round(11.51)
12

Math.floor(11.49)
11
Math.floor(11.51)
11

Math.ceil(11.49)
12
Math.ceil(11.51)
12
*/

function strOp() {
  var str = prompt("Enter string");
  for (i = str.length; i > 0; i--) {
    console.log(str.charAt(i - 1) + "");
  }

  //ES 5 Syntax Possible Solution:

  function longestString1(arr) {
    var longest = ""; // Step 0
    for (var i = 0; i < arr.length; i++) {
      // Step 1
      if (arr[i].length > longest.length) {
        // Step 2 & 3
        longest = arr[i]; // Step 4
      }
    }
    return longest; // Step 5
  }

  //ES 6 Syntax Possible Solution:

  const longestString2 = (arr) => {
    let longest = ""; // Step 0
    arr.forEach((item) => {
      // Step 1
      if (item.length > longest.length) {
        longest = item;
      }
    });
    return longest; // Step 5
  };

  const countingChars = (str) => {
    const charCount = {}; //Step 0
    let maxCharCount = 0;
    let maxChar = "";
    for (let i = 0; i < str.length; i++) {
      // Step 1.
      charCount[str[i]] = ++charCount[str[i]] || 1;
    }

    for (let key in charCount) {
      //Step 2
      if (charCount[key] >= maxCharCount) {
        maxCharCount = charCount[key]; //Step 3
        maxChar = key;
      }
    }

    return maxChar; //Step 4
  };

  const anagrams = (str1, str2) => {
    if (str1.length !== str2.length) {
      //step 1
      return false;
    }
    let sort1 = str1.split("").sort(); // step 2
    let sort2 = str2.split("").sort();
    return sort1.join("") === sort2.join("");
  };

  const palindrome = (str) => {
    let trimmed = str.replace(/[^\w]/g, "");
    return trimmed === trimmed.split("").reverse().join(""); // Steps 1-4
  };

  const balancedbrackets = (str) => {
    const stack = [];
    let openers = ["{", "[", "("];
    let closers = ["}", "]", ")"];

    const dict = {
      "{": "}",
      "[": "]",
      "(": ")",
    };

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (openers.includes(char)) {
        stack.push(char);
      } else if (closers.includes(char)) {
        //is our stack empty?

        if (!stack.length) {
          return false;
        }
        //does our popped element not match the corresponding element?
        else if (dict[stack.pop()] !== char) {
          return false;
        }
      }
    }

    return stack.length === 0;
  };

  const sortObjects = (arr) => {
    return arr.sort((a, b) => (a.population > b.population ? 1 : -1));
  };
}

// unsorted

//how to pass object as param in function
function checkAge(data) {
  if (
    data ===
    {
      age: 18,
    }
  ) {
    console.log("You are an adult!");
  } else if (
    data ==
    {
      age: 18,
    }
  ) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({
  age: 18,
});

//Hmm.. You don't have an age I guess
/*
When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory
The two objects that we are comparing don’t have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality
This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false
*/

// In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

//(function(){
// immediately invoked function
// })();

//Currying is an advanced technique to transform a function of arguments n, to n functions of one or less arguments.
/*
function add (a) {
  return function(b){
    return a + b;
  }
}
 
add(3)(4)
 
For Example, if we have a function f(a,b) , then the function after currying, will be transformed to f(a)(b).
 
By using the currying technique, we do not change the functionality of a function, we just change the way it is invoked.
*/

/*Shift all Negative numbers of the array at starting and positive numbers after that in the array.
Example :
var x =[15,-4, 10, 12, -12, 10, -11, 23, 8372]; 
 [-11, -12, -4, 15, 10, 12, 10, 23, 8372] //output 
 
 for (let i = 0; i < x.length;i++){
  if(x[i] < 0) {
  x.unshift(x.splice(i, 1)[0]);
  }
 }
 console.log(x);*/

//check anagram
var areAnagram = (str1, str2) =>
  str1.toLowerCase().split("").sort().join("") ===
  str2.toLowerCase().split("").sort().join("");

///////////////////////////////////////////////////

const str = "i have learned something new today";
const arr2 = str.split(" ");

for (var i = 0; i < arr2.length; i++) {
  arr2[i] = arr2[i].charAt(0).toUpperCase() + arr2[i].slice(1);
}
const str2 = arr2.join(" ");
console.log(str2);

//Outptut: I Have Learned Something New Today

// for...in iterates over property names, for...of iterates over property values:
const arr3 = [3, 5, 7];
arr3.foo = "hello";

for (let i in arr3) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr3) {
  console.log(i); // logs 3, 5, 7
}

function FirstReverse(str) {
  result = "";
  for (i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}
// keep this function call here
FirstReverse("kirtishil");

function FirstReverse(str) {
  var result = "";
  for (var i = str.length - 1; i >= 0; i--) {
    result += str.substring(i, i + 1);
  }
  // code goes here
  return result;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstReverse("kirtishil");

function FirstReverse(string) {
  return string.split("").reverse().join("");
}

// keep this function call here
FirstReverse("kirtishil");

function FirstFactorial(num) {
  return num === 1 ? 1 : num * FirstFactorial(num - 1);
}

// keep this function call here
FirstFactorial(5);

function LongestWord(sen) {
  return sen
    .match(/w+/g)
    .reduce((item, next) => (item.length >= next.length ? item : next));
}

// keep this function call here
LongestWord("ddhjdsd dsds");

function LongestWord(sen) {
  var arr = sen.match(/[a-z]+/gi);
  var sorted = arr.sort(function (a, b) {
    return b.length - a.length;
  });
  // code goes here
  return sorted[0];
}

// keep this function call here
console.log(LongestWord("dsds dswsa"));

function QuestionsMarks(str) {
  res = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = true;
        if (str.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }
  return res;
}

// keep this function call here
QuestionsMarks("kirtishil");

function FindIntersection(strArr) {
  const [a, b] = strArr.map((x) => x.split(",").map((x) => parseInt(x)));
  const s = new Set(b);

  return a.filter((x) => s.has(x)).join(",") || "false";
}

// keep this function call here
console.log(FindIntersection(["dsdsf", "dsfdss"]));

function FindIntersection(strArr) {
  const list1 = strArr[0].split(", ");
  const list2 = strArr[1].split(", ");
  const test = list1.filter((val) => list2.indexOf(val) !== -1);
  return test.length ? test.join(",") : false;
}

// keep this function call here
console.log(FindIntersection(["dsgd", "hghg"]));

var arr4 = [1, 2, 5, 10, 20];
var sum = arr4.reduce((a, i) => {
  return a + i;
});
document.write(sum);

var arr5 = [1, 2, 5, 10, 20];
var sum = 0;
for (let i in arr5) {
  sum += arr5[i];
}
document.write(sum);

var num = 5;
sq = 0;
odd = 1;
while (num > 0) {
  sq += odd;
  odd += 2;
  num -= 1;
}
console.log(sq);

//ui functions
$("section").click(function () {
  $(this).addClass("big-blue", 1000, "easeOutBounce");
});

$("input[type=range]").on("click", function () {
  console.log($(this).val());
});

//
// splice and slice:
var arr6 = [1, 2, 3, 5, 6];
console.log(arr6.splice(3, 1));
console.log(arr6);
console.log(arr6.slice(2));
console.log(arr6);
// backtick:
var fname = "Kirtishil";
var lname = "Patil";
console.log("Im" + fname + "" + lname);
console.log(`Im ${fname} ${lname}`);
// regex:
const regex = new RegExp(/^k.l$/);
console.log(regex.test("kil"));
// Same reference
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a == b); // false

console.log(a == "1,2,3"); // true

let c = a;
console.log(c == a); //true
console.log(c == b); //false

let a1 = [10];
let bc = 10;
console.log(a1 == bc); // true
// sum of all values from array
var numbers2 = [3, 5, 7, 2];
var sum = numbers2.reduce((x, y) => x + y);
console.log(sum);
// destructuring (swap values)
(a = 2), (b = 4);
[a, b] = [b, a];
console.log(a, b); //4,2

function total(num) {
  return function (num2) {
    return num + num2;
  };
}
total(5)(10);

// Async JS
function greet(name) {
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
  const name = "Kirtishil";
  callback(name);
}

higherOrderFunction(greet);

// promise example
function holdTillResponse() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function mainFun() {
  console.log("calling");
  const result = await holdTillResponse();
  console.log(result);
  //under this line will execute after above result
  console.log(111);
  // expected output: "resolved"
}

mainFun();

//
const array = [2, 3, 4, 5, 4, 6, 4, 7, 4, 5, 6, 6];

var dup = {};

array.forEach((item) => {
  dup[item] = (dup[item] || 0) + 1;
});
console.log(dup);

const result = Object.entries(dup).reduce((acc, [key, value]) => {
  if (value > 1) {
    acc[key] = value;
  }
  return acc;
}, {});

console.log(result);

const demo = {};

for (let key in dup) {
  if (dup[key] > 1) {
    demo[key] = dup[key];
  }
}

console.info(demo);


//remove duplicates from array
const arr1 = [1, 3, 4, 5, 6, 7, 8, 2, 5, 3];
const arr2 = [2, 3, 6, 8, 9, 0, 4, 2];

// Combine both arrays using the spread operator
const combined = [...arr1, ...arr2];

// Use a Set to automatically remove duplicates and then convert it back to an array
const uniqueArray = [...new Set(combined)];

console.log(uniqueArray);

//////////////////////////////////////
const arr1 = [1, 3, 4, 5, 6, 7, 8, 2, 5, 3];
const arr2 = [2, 3, 6, 8, 9, 0, 4, 2];

// Combine both arrays using the spread operator
const combined = [...arr1, ...arr2];

// Create an object to keep track of unique elements
const uniqueElements = {};
const uniqueArray = [];

// Iterate over the combined array
for (let i = 0; i < combined.length; i++) {
  const value = combined[i];
  if (!uniqueElements[value]) {
    uniqueArray.push(value);
    uniqueElements[value] = true;  // Mark this value as encountered
  }
}

console.log(uniqueArray);

///////////////////////////

arr = ['hello', 'kirtishil', 'hello', 'bye']
occ = {}
arr.forEach((item) => {
  if (occ[item]) {
    occ[item]++
  } else {
    occ[item] = 1
  }
})
console.log(occ)
//{hello:2, kirtishil:1, bye:1}