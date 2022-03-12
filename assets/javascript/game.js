function myFunction() {
    var st = document.getElementById("myguess").value;
    return st;
}
s = "abcdefghijklmnopqrstuvwxyz";
var lose = 0;
var win = 0;
var yourguess = "";
var guess = 10;
document.getElementById("win").innerHTML = win;
document.getElementById("lose").innerHTML = lose;
document.getElementById("guess").innerHTML = guess;
console.log(win);
console.log(lose);
console.log(guess);
console.log(yourguess);

function play() {
    var r = s[Math.floor(Math.random() * s.length)];
    st = myFunction();
    if (st == r) {
        win++;
        console.log(win);
        console.log(lose);
        console.log(guess);
        console.log(yourguess);
        document.getElementById("win").innerHTML = win;
        document.getElementById("lose").innerHTML = lose;
        document.getElementById("guess").innerHTML = guess;
        r = s[Math.floor(Math.random() * s.length)];
        st = myFunction();
        yourguess += st;
        yourguess += " ";
        document.getElementById("yourguess").innerHTML = yourguess;
    } else {
        guess--;
        console.log(win);
        console.log(lose);
        console.log(guess);
        console.log(yourguess);
        document.getElementById("win").innerHTML = win;
        document.getElementById("lose").innerHTML = lose;
        document.getElementById("guess").innerHTML = guess;
        st = myFunction();
        yourguess += st;
        yourguess += " ";
        document.getElementById("yourguess").innerHTML = yourguess;
    }
    if (guess == 0) {
        lose++;
        console.log(win);
        console.log(lose);
        console.log(guess);
        console.log(yourguess);
        document.getElementById("win").innerHTML = win;
        document.getElementById("lose").innerHTML = lose;
        document.getElementById("guess").innerHTML = guess;
        r = s[Math.floor(Math.random() * s.length)];
        st = myFunction();
        guess = 10;
        yourguess += st;
        yourguess += " ";
        document.getElementById("yourguess").innerHTML = yourguess;

    }
}