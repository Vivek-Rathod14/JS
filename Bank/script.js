let option = document.querySelector('#option');
let option2 = document.querySelector('#option2');

let Name = document.querySelector('#Name');
let AccountNumber = document.querySelector('#AccountNumber');
let Ammount = document.querySelector('#Ammount');

let nameShow = document.querySelector('#nameShow');
let AccountNumberShow = document.querySelector('#AccountNumberShow');
let AmmountShow = document.querySelector('#AmmountShow');

let submit = document.querySelector('#submit');

let data = document.querySelector('.data');
let dataShow = document.querySelector('.dataShow');

let add = document.querySelector('.add');
let addMoney = document.querySelector('.addMoney');
let addInput = document.querySelector('.add input');

let currentUserIndex = null;

option.addEventListener("change", () => {
    data.style.display = "block";
});

option2.addEventListener("change", () => {

    let enteredAccount = prompt("Enter Account Number");
    let users = JSON.parse(localStorage.getItem("users")) || [];

    currentUserIndex = users.findIndex(
        u => u.accountNumber === enteredAccount
    );

    if (currentUserIndex === -1) {
        alert("❌ Invalid Account Number");
        return;
    }

    let user = users[currentUserIndex];

    dataShow.style.display = "block";
    add.style.display = "block";

    nameShow.innerHTML = user.name;
    AccountNumberShow.innerHTML = user.accountNumber;
    AmmountShow.innerHTML = user.amount;

    addMoney.onclick = () => {
        let value = Number(addInput.value);
        if (value <= 0) {
            alert("Enter valid amount");
            return;
        }

        if (option2.value === "Deposit") {
            user.amount += value;
        } else {
            if (user.amount < value) {
                alert("❌ Insufficient Balance");
                return;
            }
            user.amount -= value;
        }

        users[currentUserIndex] = user;
        localStorage.setItem("users", JSON.stringify(users));

        AmmountShow.innerHTML = user.amount;
        addInput.value = "";

        alert("✅ Transaction Successful");
    };
});

submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (!Name.value || !AccountNumber.value || !Ammount.value) {
        alert("Fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        name: Name.value,
        accountNumber: AccountNumber.value,
        amount: Number(Ammount.value)
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Account Created");

    Name.value = "";
    AccountNumber.value = "";
    Ammount.value = "";
});
