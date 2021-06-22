'use strict';
var z = 0
let name = prompt("let us know who are you")
alert("Nice to meet you "+ name + ' lets start playing')

var x1 = prompt("My last name labib?","(yes/no)")

if(x1.toLowerCase() == "yes"){
    alert("Right my last name is labib")
z++
}
else {alert("I am disapointed")}

var x2 = prompt("Did I born in 1996?","(yes/no)")
if(x2.toLowerCase() == "yes"){
    alert("Right I am 25 years old")
z++
}
else {alert("I am disapointed")}

var x3 = prompt("Am I a civil engineer?","(yes/no)")

if(x3.toLowerCase() == "no"){
    alert("Right I am a mechanical engineeer")
z++
}
else {alert("I am disapointed")}

var x4 = prompt("Am I intersted in programing?","(yes/no)")
if(x4.toLowerCase() == "yes"){
    alert("Right I am very intersted in programing")
z++
}
else {alert("I am disapointed")}

var x5 = prompt("Did i graduate from JU?","(yes/no)")
if(x5.toLowerCase() == "yes"){
    alert("Right I stuided in JU")
z++
}
else
{alert("I am disapointed")}

var D1 = prompt("how old am I", "please inter a number")
for (let i = 0; i < 3; i++){
if (D1 == 25){
    z++ 
    alert("Good Job !!") 
    break;
}
else if (21 <= D1 && D1 <= 29) 
{
alert("you are approaching")
var D1 = prompt("how old am I", "please inter a number")
}
else {
    alert("You are far away")
    var D1 = prompt("How old am I", "please inter a number")
}
}
if (D1 != 25){
    alert("Sorry you use all your attempts I am 25 years old")
}

    /* var D2 = prompt("when did Jordan become independent?", "year")
 for (let i = 0; i < 3; i++){
    if (D2 == 1946){
        w++ 
        alert("Good Job !!") 
        break;
    }
    else if (1940 <= D1 && D1 <= 1950) 
    {
    alert("you are approaching")
    var D2 = prompt("when did Jordan become independent?", "year")
    }
    else {
        alert("You are far away")
        var D2 = prompt("when did Jordan become independent?", "year")
    }
 }
    if (D2 != 1946){
        alert("you use all your attempt foucsing in other questions")
    }
    var D3 = prompt("how many brothers do i have?", "1,2,3,4,5..")
    for (let i = 0; i < 3; i++){
       if (D2 == 4){
           w++ 
           alert("Good Job !!") 
           break;
       }
       else if (3 <= D1 && D1 <= 5) 
       {
       alert("you are approaching")
       var D3 = prompt("how many brothers do i have?", "1,2,3,4,5..")
       }
       else {
           alert("You are far away")
           var D3 = prompt("how many brothers do i have?", "1,2,3,4,5..")
       }
    }
       if (D3 != 4){
           alert("you use all your attempt foucsing in other questions")
       } */
let c1 = []
alert("Now we will play anoter game, you should guess three numbers from 1 to 10")
for (let i = 0 ; i < 6 ; i++){
 for (let q =1 ; q < 4 ; q++){ 
    c1.push(prompt("guess number "+ q))
 }
 c1.sort() 
 if (c1[0] == 1 && c1[1] == 2 && c1[2] == 3){
 alert("Right answer")
 z++
 break;
}
 else if (i == 5){
     alert('wrong answer, the right answer is 1 2 3 without consdiring the order')
 }
else {
     c1 = []
     alert('wrong answer')

 }
}
// console.log(c1)
switch(z) {
    case 7: 
     alert(name + ' you answered all the questions right' , "you know me well" )
     break;

    case 6:
      alert(name + ' you answered ' + z + " questions right, you know me well")
      break;
    case 5:
      alert(name + ' you answered ' + z + " questions right, you know me well")
      break;
    default:
    alert(name + ' you answered ' + z + " questions right, I hope this game let you know me more ")}