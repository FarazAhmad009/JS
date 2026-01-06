// console.log("Hello World");
// console.log("Apna College");
// let a = 5;
// let b = 10;
// console.log("Sum is :", a+b);

// console.log("after that code");
// let age = 13;
// if (age >= 18) {
//     console.log("You can vote");
// }

// else {
//     console.log("you can't vote");
// }
// console.log("befor that code");

// let color = "red";

// if (color === "red") {
//     console.log("Stop");
// } else if (color === "yellow") {
//     console.log("Start the engine");
// } else if (color === "green") {
//     console.log("Go");
// }

// let marks = 80;

// if (marks >= 33) {
//     console.log("Pass");
//     if (marks >= 80) {
//         console.log("Grade is Outstanding")
//     } else {
//         console.log("Grade is A");
//     }
// } else {
//     console.log("Fail");
// }


// let marks = 85;

// if (!(marks < 33)) {
//     console.log("Pass");
// }

// let str = "aroplan";

// if ((str.length > 3) && (str[0] === "a")) {

//     console.log("It's a Good String");
// } else {
//     console.log("It's a Bad String");
// }

// let day = 4;

// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//         case 2:
//         console.log("tuesday");
//         break;
//         case 3:
//         console.log("wensday");
//         break;
//         case 4:
//         console.log("thurday");
//         break;
//         case 5:
//         console.log("friday");
//         break;
//         case 6:
//         console.log("saturday");
//         break;
//         case 7:
//         console.log("sunday For fun");
//         break;
//     default:
//         console.log("Wrong day searching");
//         break;
// }

// alert("Some thing is wrong");
// console.log("this is log statmint");
// console.error("thi is is an error msg");
// console.warn("this is a warning msg");


// let name = prompt("Enter you name");
// console.log(name);

// let firstName = prompt("Enter you first name");
// let lastName = prompt("Enter you last name");
// console.error("Welcome",firstName,lastName);

// let firstName = prompt("Enter you first name");
// let lastName = prompt("Enter you last name");
// let msg = "Welcome "+firstName+" "+lastName+"!";
// alert(msg);
// alert("Welcome "+ firstName+ " "+ lastName+ "!");


// let name = prompt("pleaseenteryourname");
// let age  = prompt("pleaseenteryourage");
// alert(`${name}is${age}yearsold.`)

// let a = 15;
// let b = 18;
// let c = 13;
// if (a>b && a>c) {
//     console.log(a, "Is lagest number");
// } else if (b>c && b>a){
//     console.log(b, "Is lagest number");
// } else {
//     console.log(c, "Is lagest number");
// }

// if( a > b){
//     if( a > c){
//     console.log(a,"islargest");

//     } else {
//         console.log(c,"islargest");
//     }
//       } else {
//    if ( b > c){
//     console.log(b,"islargest");

//  } else{console.log(c,"islargest");}
// }

// let num1 = 32;
// let num2 = 47852;
// if ((num1 % 10) == (num2 % 10)) {
//     console.log("numbershavethesamelastdigitwhichis", num1 % 10);
// } else {
//     console.log("numbersdon'thavethesamelastdigit");
// }

// let name = "Faraz Ahmad";
// console.log(name.toUpperCase());

// let str = "ApNaCoLlEgE";
// let idx = 3;
// if (str[idx] == str[idx].toLowerCase()) {
//     console.log("characterislowercase");
// } else {
//     console.log("characterisnotlowercase");
// }

// let num = 3;
// for (let i = num; i <= 10; i++){
//     console.log(i);   
// }

// let n = prompt("Enter your number");
// n = parseInt(n);
//  for(let i = n; i <= n*10; i= i+n){
//     console.log(i);
//  }

// Guessing favriout movie game .....................

// const favMovie = "janver";
// let guess = prompt("Guess My Favriout Movie");

// while ((guess != favMovie) && (guess != "quit")){
//    guess = prompt("Wrong Guess! Plz try again");
// }

// if (guess == favMovie) {
//    console.log("Conraculations You guess right!!")
// } else {
//    console.log("You quited!!");
// }


// let fruits = ["apple", "banana", "aliche", "mango", "orange",];

// for(let i = 0; i < fruits.length; i++){
//    console.log(i, fruits[i]);
// }

// let heros = [["ironman,", "spiderman", "thor"], ["superman", "woder women", "flash"]];

// for(let i=0; i<heros.length; i++){
//    // console.log("Outer loop");
//    for(let j=0; j<heros[i].length; j++){
//       // console.log("Inner loop");
//       console.log(heros[i][j]);
//    }
// }

// let heros = [
//    ["ironman,", "spiderman", "thor"],
//    ["superman", "woder women", "flash"],
// ];

// for (let i = 0; i < heros.length; i++) {
//    console.log(i, heros[i], heros[i].length);
//    for (let j = 0; j < heros[i].length; j++) {
//       console.log(`j=${j}, ${heros[i][j]}`);
//    }
// }

// MAKING TO-DO LIST ................/

// let todo = [];

// let req = prompt("Enter your request");

// while(true){
//    if(req === "quit"){
//       console.log("Ap app say quit ker chukay hai shukriya!");
//       break;
//    } else if(req == "list"){

//       console.log("---------------");
//       for(let i = 0; i < todo.length; i++){
//          console.log(i, todo[i]);
//       }
//       console.log("---------------");
//    } else if (req == "add"){
//       let task = prompt("Ap jo task add krna chaty ho wo likhay")
//       todo.push(task);
//       console.log("your gived task added to the list");
//    } else if(req == "delet"){
//       let idx = prompt("Jo task delet karna chatay hai os task ka index enter kray")
//       todo.splice(idx, 1);
//       console.log("task delet ho chuka hai shukriya!");
//    } else {
//       console.log("Kindly app ko use karnay ki instractions follow kray!");
//    }
//    req = prompt("Enter your request");
// }


// Ai boot code 

// let todo = [];

// let req = prompt("Enter your request");

// while (true) {
//    if (req === "quit") {
//       console.log("Ap app say quit ker chukay hai shukriya!");
//       break;
//    } else if (req == "list") {
//       console.log("---------------");
//       for (let i = 0; i < todo.length; i++) {
//          console.log(i, todo[i]);
//       }
//       console.log("---------------");
//    } else if (req == "add") {
//       let task = prompt("Ap jo task add krna chaty ho wo likhay");
//       todo.push(task);
//       console.log("Your given task added to the list");
//    } else if (req == "delete") { // Fixed spelling from "delet" to "delete"
//       let idx = parseInt(prompt("Jo task delete karna chatay hai os task ka index enter kray")); // Convert input to number
//       if ( idx >= 0 && idx < todo.length) { // Check if index is valid
//          todo.splice(idx, 1);
//          console.log("Task delete ho chuka hai shukriya!");
//       } else {
//          console.log("Invalid index, please enter a valid index."); // Error message for invalid index
//       }
//    } else {
//       console.log("Kindly app ko use karnay ki instructions follow kray!");
//    }
//    req = prompt("Enter your request");
// }


//Object lectrels

// const post ={
//     username: "Shradhakhapra",
//     content : "This is my first #post",
//     like: 150,
//     repost: 5,
//     tags : ["@apnacollege", "@delta"]
// };

//genarat a rendem number guessing Game.............//

// let max = prompt("Enter the max number");
// let random = Math.floor(Math.random() * max) + 1;

// while (true) {
//     let guess = prompt("Guess the number or type 'quit' to exit");
    
//     if (guess === "quit") {
//         console.log("Game over User has quit");
//         break;
//     }

//     guess = Number(guess);

//     if (isNaN(guess)) {
//         console.log("Please enter a valid number.");
//         continue; // Restart the loop
//     }

//     if (guess === random) {
//         console.log("Yay! You guessed it right! The random number is this!", random);
//         break;
//     } else if (guess < random) {
//         console.log("Hint: you guessed a small number");
//     } else {
//         console.log("Hint: you guessed a large number");
//     }
// }



let max;

while (true) {
    max = prompt("Enter a positive max number");
    
    max = Number(max);
    
    if (!isNaN(max) && max > 0) {
        break; // Exit the loop if a valid number is provided
    } else {
        console.log("Please enter a valid positive number.");
    }
}

let random = Math.floor(Math.random() * max) + 1;

while (true) {
    let guess = prompt("Guess the number or type 'quit' to exit");
    
    if (guess === "quit") {
        console.log("Game over User has quit");
        break;
    }

    guess = Number(guess);

    if (isNaN(guess)) {
        console.log("Please enter a valid number.");
        continue; // Restart the loop
    }

    if (guess === random) {
        console.log("Yay! You guessed it right! The random number is this!", random);
        break;
    } else if (guess < random) {
        console.log("Hint: you guessed a small number");
    } else {
        console.log("Hint: you guessed a large number");
    }
}