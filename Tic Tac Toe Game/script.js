var boxes = document.querySelectorAll('.box');
var turn = true; 

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (turn) {
            box.innerHTML = 'O';
            turn = false;
        } else {
            box.innerHTML = "X";
            turn = true;
        }
        box.style.pointerEvents = "none"; 
        Win();
    })
})

function Win() {
    var ArryBox = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let pattern of ArryBox){
        const [a, b, c] = pattern;
        if (boxes[a].innerHTML && boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML) {
            document.getElementById('result').innerHTML = boxes[a].innerHTML + " is the Winner";
            boxes.forEach(box => box.style.pointerEvents = "none");
            reset();
            return; 
        }
    }
    if (Array.from(boxes).every(box => box.innerHTML)) {
        document.getElementById('result').innerHTML = "It's a Draw";
        reset();
    }
}

function reset() {
    boxes.forEach(box => {
        box.innerHTML = "";
        box.style.pointerEvents = "auto";
    });
}
