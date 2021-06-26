'use strict';

let z = 0

let name = prompt("let us know who are you")
alert("Nice to meet you " + name + ' let us start playing')

function Qname() {
    let a1 = true
    while (a1) {
        let x1 = prompt("My last name labib?", "(yes/no) or (y/n)")

        if (x1.toLowerCase() == "yes" || x1.toLowerCase() == "y") {
            alert("Right my last name is labib")
            z++
            a1 = false
        }
        else if (x1.toLowerCase() == "no" || x1.toLowerCase() == "n") {
            alert("I am disapointed")
            a1 = false
        }
        else {
            alert("Please enter yes or no")
        }
    }
}
Qname();
function Qage() {
    let a1 = true
    while (a1) {


        let x2 = prompt("Was I born in 1996?", "(yes/no) or (y/n)")
        if (x2.toLowerCase() == "yes" || x2.toLowerCase() == "y") {
            alert("Right I am 25 years old")
            z++
            a1 = false
        }
        else if (x2.toLowerCase() == "no" || x2.toLowerCase() == "n") {
            alert("I am disapointed")
            a1 = false
        }
        else {
            alert("please enter yes or no")
        }
    }
}
Qage();

function Qstudy() {
    let a1 = true
    while (a1) {
        let x3 = prompt("Am I a civil engineer?", "(yes/no) or (y/n)")

        if (x3.toLowerCase() == "no" || x3.toLowerCase() == "n") {
            alert("Right I am a mechanical engineeer")
            z++
            a1 = false
        }
        else if (x3.toLowerCase() == "yes" || x3.toLowerCase() == "y") {
            alert("I am disapointed")
            a1 = false
        }
        else {
            alert("please enter yes or no")
        }
    }
}
Qstudy();

function Qinterest() {
    let a1 = true
    while (a1) {
        let x4 = prompt("Am I intersted in programing?", "(yes/no) or (y/n)")
        if (x4.toLowerCase() == "yes" || x4.toLowerCase() == "y") {
            alert("Right I am very intersted in programing")
            z++
            a1 = false
        }
        else if (x4.toLowerCase() == "no" || x4.toLowerCase() == "n") {
            alert("I am disapointed")
            a1 = false
        }
        else {
            alert("Please enter yes or no")
        }
    }
}
Qinterest();

function Qgraduate() {
    let a1 = true
    while (a1) {
        let x5 = prompt("Did I graduate from JU?", "(yes/no) or (y/n)")
        if (x5.toLowerCase() == "yes" || x5.toLowerCase() == "y") {
            alert("Right I stuided in JU")
            z++
            a1 = false
        }
        else if (x5.toLowerCase() == "no" || x5.toLowerCase() == "n") {
            alert("I am disapointed")
            a1 = false
        }
        else {
            alert("Please enter yes or no")
        }
    }
}
Qgraduate();
function Qold() {


    let D1 = prompt("how old am I", "please inter a number")
    for (let i = 0; i < 3; i++) {
        if (D1 == 25) {
            z++
            alert("Good Job !!")
            break;
        }
        else if (21 <= D1 && D1 <= 29) {
            alert("you are approaching")
            D1 = prompt("how old am I", "please inter a number")
        }
        else {
            alert("You are far away")
            D1 = prompt("How old am I", "please inter a number")
        }
    }
    if (D1 != 25) {
        alert("Sorry you use all your attempts I am 25 years old")
    }
}
Qold();

function Qguess() {

    let c1 = []
    alert("Now, we will play another game, you should guess three numbers from 1 to 10")
    for (let i = 0; i < 6; i++) {
        for (let q = 1; q < 4; q++) {
            c1.push(prompt("guess number " + q))
        }
        c1.sort()
        if (c1[0] == 1 && c1[1] == 2 && c1[2] == 3) {
            alert("Right answer")
            z++
            break;
        }
        else if (i == 5) {
            alert('Wrong answer, the right answer is 1 2 3 without consdiring the order')
        }
        else {
            c1 = []
            alert('wrong answer')

        }
    }
}
Qguess();

function scoor() {


    switch (z) {
        case 7:
            alert(name + ' you answered all the questions right, you know me well')
            break;

        case 6:
            alert(name + ' you answered ' + z + " questions right, you know me well")
            break;
        case 5:
            alert(name + ' you answered ' + z + " questions right, you know me well")
            break;
        default:
            alert(name + ' you answered ' + z + " questions right, I hope this game let you know me more ")
    }
}
scoor();
