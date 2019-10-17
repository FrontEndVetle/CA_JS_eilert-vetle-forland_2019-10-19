//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Arsenal() {
    
    this.player = "Tierney"
}

Arsenal.prototype.back = function() {
    console.log ("One of the Arsenal backs is " + this.player +"");
};
                 
var irish = new Arsenal();
    irish.back();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var number = [1,2,3,4,5,6,7,8,9,10];

var num = number.slice(5,6 );

console.log(num);


//3. Delete the last number in the array that you created above.
var popped = number.pop();

console.log(number);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

var str = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';

var chWords = {
    Strawberries: "bananas",
    strawberry: "banana",
    strawberries:"bananas"
};

replacedString = str.replace(/Strawberries|strawberry|strawberries/gi, function(matched){
    return chWords[matched];
});
console.log(replacedString);




//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.




//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = [
    {name: 'John', age: 25 },
    {name:"Elisabeth", age: 30},
    {name:"Billy", age: 40}
];


var names = people.map((person) => person.name === "John");

console.log(names);

//7. Create a simple function that logs the date.

var ts = new Date();
console.log(ts.toDateString());