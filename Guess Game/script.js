let secretNumber = Math.floor(Math.random() * 20) + 1;
// document.getElementById("number-box").innerHTML=secretNumber;
function getRandomNumber() {
    var check = Number(document.getElementById("UserInout").value);

    if (check >= 1 && check <= 20) {

        // document.getElementById("h6").innerHTML =
        //     "✅ " + check + " is a valid number!";
        // return true;
        if (secretNumber == check) {
            document.getElementById("h6").innerHTML = check + " right ";
            document.getElementById("number-box").innerHTML = secretNumber;
            document.body.style.backgroundColor = "#00ff00"; // HEX code

        }
        else {
            if (check > secretNumber) {
                document.getElementById("h6").innerHTML = check + "secrect number she bada hai  ";
            }
            else {
                document.getElementById("h6").innerHTML = check + "secrect number she chota hai  ";
            }
        }
    }
    else {
        document.getElementById("h6").innerHTML = check + " is not a valid number. Please enter a number between 1 and 20.";
        return;
    }
}
function resetGame() {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById("number-box").innerHTML = "?";
    document.getElementById("h6").innerHTML = "Your Choice:";
    document.getElementById("UserInout").value = "";
    document.body.style.backgroundColor = "#222222";
}
