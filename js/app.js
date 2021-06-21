'use strict';
var z = 0
let name = prompt("let us know who are you")
alert("Nice to meet you "+ name + 'lets start playing')

var x1 = prompt("My last name labib?(yes/no)")

if(x1.toLowerCase() == "yes"){
    alert("Right my last name is labib")
var z = z + 1
}
else {alert("I am disapointed")}

var x2 = prompt("Did I born in 1996?(yes/no)")
if(x2.toLowerCase() == "yes"){
    alert("Right I am 25 years old")
var z = z + 1
}
else {alert("I am disapointed")}

var x3 = prompt("Am I a civil engineer?(yes/no)")

if(x3.toLowerCase() == "no"){
    alert("Right I am a mechanical engineeer")
var z = z + 1
}
else {alert("I am disapointed")}

var x4 = prompt("Am I intersted in programing?(yes/no)")
if(x4.toLowerCase() == "yes"){
    alert("Right I am very intersted in programing")
var z = z + 1
}
else {alert("I am disapointed")}

var x5 = prompt("Did i graduate from JU?(yes/no)")
if(x5.toLowerCase() == "yes"){
    alert("Right I stuided in JU")
var z = z + 1
}
else
{alert("I am disapointed")}
switch(z) {
    case 4:
      alert(name + ' you answered ' + z + " question right, you know me well")
      break;
      case 5:
      alert(name + ' you answered ' + z + " question right, you know me well")
      break;
      default:
        alert(name + ' you answered ' + z + " question right, I hope this game let you know me more ")}