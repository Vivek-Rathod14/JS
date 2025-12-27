var option = document.querySelectorAll(".option")
var questionBox = document.querySelector(".question-box");
var timer = document.querySelector(".timer");
var times = document.querySelector(".times");
var price = document.querySelector(".price");
var kbcQ = [
    {
        que: 'पंचशील समझौता’ भारत ने किस देश के साथ किया था?',
        A: "जापान",
        B: "चीन",
        C: "रूस",
        D: "बांग्लादेश",
        ans: 'जापान',
        price: "1000",
    },
    {
        que: 'मानव शरीर की सबसे छोटी हड्डी कौनसी है?',
        A: "Stapes",
        B: "Femur",
        C: "Ulna",
        D: "Tibia",
        ans: 'Stapes',
        price: "2000",
    },
    {
        que: 'DNA की संरचना किसने खोजी थी?',
        A: "न्यूटन और बोहर",
        B: "डार्विन और लैमार्क",
        C: "वॉटसन और क्रिक",
        D: "रदरफोर्ड और प्लांक",
        ans: 'वॉटसन और क्रिक',
        price: "3000",
    },
    {
        que: '‘द्रविड़ मुनेत्र कड़गम’ (DMK) की स्थापना किसने की?',
        A: "पेरियार ई.वी. रामासामी",
        B: "एम. करुणानिधि",
        C: "सी.एन. अन्नादुरै",
        D: "जयललिता",
        ans: 'सी.एन. अन्नादुरै',
        price: "5000",
    },
    {
        que: 'United Nations का मुख्यालय कहाँ है?',
        A: "जिनेवा",
        B: "न्यूयॉर्क",
        C: "पेरिस",
        D: "वियना",
        ans: 'न्यूयॉर्क',
        price: "10000",
    },
    {
        que: 'प्लासी का युद्ध किस वर्ष हुआ था?',
        A: "1757",
        B: "1857",
        C: "1764",
        D: "1782",
        ans: '1757',
        price: "20000",
    },
    {
        que: 'नाभिकीय रिएक्टर में Moderator का कार्य क्या होता है?',
        A: "न्यूट्रॉन की गति बढ़ाना",
        B: "न्यूट्रॉन की गति कम करना",
        C: "कोर को ठंडा रखना",
        D: "ऊर्जा भंडारण",
        ans: 'न्यूट्रॉन की गति कम करना',
        price: "40000",
    },
    {
        que: 'किस भारतीय वैज्ञानिक को ‘Rocket Man of India’ कहा जाता है?',
        A: "विक्रम साराभाई",
        B: "ए.पी.जे अब्दुल कलाम",
        C: "होमी भाभा",
        D: "सत्येन्द्र बोस",
        ans: 'ए.पी.जे अब्दुल कलाम',
        price: "80000",
    },
    {
        que: '‘विश्व स्वास्थ्य संगठन’ (WHO) की स्थापना कब हुई थी?',
        A: "1945",
        B: "1948",
        C: "1950",
        D: "1955",
        ans: '1948',
        price: "160000",
    },
    {
        que: '‘कायांतरण’ (Metamorphosis) किस जीव में नहीं होता?',
        A: "तितली",
        B: "मेढक",
        C: "मच्छर",
        D: "कबूतर",
        ans: 'कबूतर',
        price: "320000",
    },
    {
        que: 'ग्रीनलैंड किस देश का हिस्सा है?',
        A: "नॉर्वे",
        B: "कनाडा",
        C: "डेनमार्क",
        D: "आइसलैंड",
        ans: 'डेनमार्क',
        price: "640000",

    },
    {
        que: 'किस तत्व का क्वथनांक सबसे अधिक है?',
        A: "पारा",
        B: "टंग्स्टन",
        C: "सोडियम",
        D: "प्लैटिनम",
        ans: 'टंग्स्टन',
        price: "1250000",

    },
    {
        que: 'विश्व की सबसे गहरी झील कौनसी है?',
        A: "टैंगान्यिका",
        B: "विक्टोरिया",
        C: "बैकाल",
        D: "सुपीरियर",
        ans: 'बैकाल',
        price: "2500000",

    },
    {
        que: 'मानव शरीर में कौनसा अंग रक्त को शुद्ध करता है?',
        A: "हृदय",
        B: "फेफड़े",
        C: "यकृत",
        D: "किडनी",
        ans: 'किडनी',
        price: "5000000",

    },
    {
        que: '‘Chipko Movement’ किस वर्ष शुरू हुआ?',
        A: "1973",
        B: "1950",
        C: "1968",
        D: "1982",
        ans: '1973',
        price: "10000000",

    }
]
var index = 0;
var totalMoney = 0;
var timerID;

loadQ()
function loadQ() {
    questionBox.innerHTML = kbcQ[index].que;
    option[0].innerHTML = kbcQ[index].A;
    option[1].innerHTML = kbcQ[index].B;
    option[2].innerHTML = kbcQ[index].C;
    option[3].innerHTML = kbcQ[index].D;
}
function hideOptions() {
    option.forEach(op => (op.style.display = "none"));
}

function qTimes() {

    var sec = 1;
    clearInterval(timerID);

    var times = document.querySelector('.times');
    times.style.opacity = "1"
    timerID = setInterval(() => {

        times.innerHTML = sec + " Your Time Start Now For 45 Sec";
        console.log(sec);
        sec++;
        if (sec > 45) {
            clearInterval(timerID);
            questionBox.innerHTML = "Timer Finished! You Lose";
            option.forEach(op => op.style.display = 'none');
            hideOptions()
        }
    }, 1000);
}


option.forEach((e) => {
    e.addEventListener('click', () => {

        if (index < 4) {

            if (e.innerHTML == kbcQ[index].ans) {
                totalMoney = totalMoney + Number(kbcQ[index].price);
                price.innerHTML = `Congratulations! You Won Total: ` + totalMoney;
                price.style.opacity = '1';
                e.style.backgroundColor = "green";
            } else {
                e.style.backgroundColor = "red";
                hideOptions();
                questionBox.innerHTML = "Your Answer Is Wrong! You Lost The Game.";
                return
            }

        }

        else {
            clearInterval(timerID);

            if (e.innerHTML == kbcQ[index].ans) {

                totalMoney = totalMoney + Number(kbcQ[index].price);
                price.innerHTML = `Congratulations! You Won Total: ` + totalMoney;
                e.style.backgroundColor = "green";
                if (index + 1 < kbcQ.length) {
                    setTimeout(() => {
                        qTimes();
                    }, 800);
                }

            } else {
                e.style.backgroundColor = "red";
                questionBox.innerHTML = "Your Answer Is Wrong! You Lost The Game.";

                hideOptions()
                return;
            }

        }
        index++;
        if (index < kbcQ.length) {

            setTimeout(() => {
                timer.innerHTML = `${index + 1}`;
                option.forEach(op => op.style.backgroundColor = "");
                loadQ();
            }, 800);

        } else {
            questionBox.innerHTML = "🎉 Quiz Finish!";
            hideOptions()
        }
    });
});



