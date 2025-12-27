let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let del = document.getElementById("del");
let ans = document.getElementById("ans");
let ac = document.getElementById("ac");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let data = button.innerText;
        let last = input.value.slice(-1);

        let operators = ["+", "-", "*", "/"];

        if (operators.includes(last) && operators.includes(data)) {
            return;
        }

        input.value += data;
    });
});

del.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
});

ans.addEventListener("click", () => {
    try {
        input.value = eval(input.value);
    } catch {
        input.value = "Error";
    }
});

ac.addEventListener("click", () => {
    input.value = "";
});
