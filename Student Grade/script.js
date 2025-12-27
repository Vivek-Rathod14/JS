var submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var eng = parseFloat(document.getElementById("eng").value) || 0;
    var guj = parseFloat(document.getElementById("guj").value) || 0;
    var maths = parseFloat(document.getElementById("maths").value) || 0;
    var sci = parseFloat(document.getElementById("sci").value) || 0;
    var comp = parseFloat(document.getElementById("comp").value) || 0;

    var total = eng + guj + maths + sci + comp;
    var per = (total / 500) * 100;

    var grade = "";
    if(per >= 90) grade = "A+";
    else if(per >= 80) grade = "A";
    else if(per >= 70) grade = "B+";
    else if(per >= 60) grade = "B";
    else if(per >= 50) grade = "C";
    else if(per >= 40) grade = "D";
    else grade = "F";
    document.getElementById("name1").innerHTML = "Name: " + name;
    document.getElementById("eng1").innerHTML = "English: " + eng;
    document.getElementById("guj1").innerHTML = "Gujarati: " + guj;
    document.getElementById("maths1").innerHTML = "Maths: " + maths;
    document.getElementById("sci1").innerHTML = "Science: " + sci;
    document.getElementById("comp1").innerHTML = "Computer: " + comp;
    document.getElementById("per1").innerHTML = "Percentage: " + per.toFixed(2) + "%";
    document.getElementById("gre1").innerHTML = "Grade: " + grade;
});
