// alert("Hello , User's! Welcome to JavaScript. Day 2");



function calculateSalary() {
    var net = Number(document.getElementById('net').value);
    var year = net * 12;
    document.getElementById('yearlySalary').innerHTML = year;
    var work = Number(document.getElementById('year').value);
    var total = work * year;
    document.getElementById('totalSalary').innerHTML = total;
    var month = year / 12;
    weekday = Number(document.getElementById('week').value);
    var dayweek1 = weekday * 4;
    document.getElementById('monthlySalary').innerHTML = month;
    var day = month / dayweek1;

    document.getElementById('dailySalary').innerHTML = day;
    var hour1 = Number(document.getElementById('hour').value);
    var hour = day / hour1;
    document.getElementById('hoursPerDay').innerHTML = hour;

}
 