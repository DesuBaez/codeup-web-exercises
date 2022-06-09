



// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
 let  userNumber =  9 ;
for (let i = 1; i <= 50; i++){
 if (i % 2 === 0){
  continue;
 }else if (i === userNumber){
  console.log("whoops! skipping " + userNumber)
 }
 console.log(i)
}