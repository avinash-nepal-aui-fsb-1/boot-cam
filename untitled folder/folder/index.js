// question 1:
//Input = Number
// Output = Number

var number = 5;
var square = number * number;

console.log(square) //25

//question 2:
var time = "12:00";

if(time >= "06:00" || time <= "12:00" ) {
    console.log("Breakfast")
} else if (time > "12:00" || time <= "16:00" ){
    console.log()
} else if (time > "16:00" && time <= "20:00"){
    console.log("Dinner")
} else {
    console.log("Sleep")
}

//quiestion 3:
//Input = Number
//Output = String

var number = 5;

if ( number % 2 === 0){
    console.log("Even")
} else {
    console.log("odd")
}

//question 4:
var name = "Avinash"
var vowel_list = "aeiou";
var count = 0;
var vowel = "0"
var Consonants= '0'
for(var i = 0; i < name.length; i++) {
  console.log(name[i]);
  if (name[i] == "a" || name[i] == "e" or ||name[i] == "i" or ||name [i] == "o"
  ||name[i] == "u"){
    vowelCount = vowelCount + 1
  } else { 
    consonantCount = consonantCount +1
  }
}

console.log("Vowels, vowelcount");
console.log("Consonants", consonantCount);

//question 5
//Input = Number
//Output = Number

var number = 2;

for(var i=1; i<=10; i++){
console.log(number + " * " + i + " = " + i*number)
}
