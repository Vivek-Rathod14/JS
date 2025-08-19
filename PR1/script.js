      function calculateTip() {
            var billamount = Number(document.getElementById('bill').value);
            var tippercentage = Number(document.getElementById('tip').value);
            var numberofpeople = Number(document.getElementById('people').value);
            var tip = (billamount * tippercentage) / 100 / numberofpeople;
            var total = (billamount * tippercentage) / 100 + billamount;
            document.getElementById("s1").innerHTML = "Total Bill: $" + total;
            var perPeople = total / numberofpeople;

            document.getElementById("s2").innerHTML = "Total Per Person : $" + perPeople;
            document.getElementById("s3").innerHTML = "Tip Per Person :  $" + tip;
        }

