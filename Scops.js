// function calSum(a, b) {
//     let sum = a+b;
//     console.log(sum);
// };

// function outerfun(){
//     let x = 5;
//     let y = 9;
//     function innerfun(){
//         console.log(x);
//     }
//     innerfun();
// }

// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num=5;      //elements larger than a number num
// function getElements (arr,num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr,num)


// Practice Question JavaScrip part (7)
// Write  an arrow funtion that return  the square of the number 'n'.
const square = (n) => n*n;
console.log(square(5)); // Output: 25

// Write a funtion that print "Hello world" 5 times ar interval of 2s each.
let id = setInterval(()=>{
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear intervel run");
}, 10000);
