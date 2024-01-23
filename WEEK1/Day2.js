//let school = 'Zindua'

//if (school === 'Zindua'){
// console.log('zindua School')
//}
//else{
//  console.log('Not Zindua School')
//}

/**
 * @LOGICALOPERATORS
 * @STRICTLYEQUAL -> ===
 * @AND -> &&
 * @OR -> ||
 * @GREATERTHAN -> >
 * @LESSTHAN -> <
 * @GREATERTHANOREQUALTO -> >=
 * @LESSTHANOREQUALTO -> <=
 * @NOT -> !
 * @NOTEQUALTO -> !==
 */


// let name = 'Wanjiku'

// switch (name) {
//     case 'Moh':
//         console.log('I am Moh')
//         break;
//     case 'Karanja':
//         console.log('I am Karanja')
//         break;
//     default:
//         console.log('I am not Moh or Karanja')
//         break;
// }


//FUNCTIONS
// function consoleHello(){ //function declaration
//     console.log('Hello') //function definition/body
// }
// consoleHello() //function call/ invocation



// //FOR LOOPS
// for ( let i = 0; i <10; i++) { //i=0 is the start/count value, i++ is the increment
//     console.log(i)
// }


// let number = 15

// console.log(number % 3)


// let number = 7

// for (let i = 1; i < 10; i++){
//     if ( i % 3 === 0 && i % 5 === 0){
//         console.log(number % 3)
//     }
// }



// let number = 15;
// for ( let i = 1; i < 15; i++){
//     if ( i % 3 === 0){
//         console.log(number % 3);
//     }
// }


// let n=15
// let sum=0
// for (let i=1; i<n; i++){
//     let rem=i%3
//     let rem2=i%5
//     if(rem===0 || rem2===0){
//         sum=sum+ i
//     }
// }
// console.log("Sum:", sum)


let n=15
let sum=0
for (let i=1; i<n; i++){
    if(i%3===0 || i%5===0){
        sum=sum +i
    }
}
console.log("Sum:", sum)