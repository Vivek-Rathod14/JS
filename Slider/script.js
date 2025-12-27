var prev = document.getElementById('prev');
var next = document.getElementById('next');
var scrollBox = document.getElementById('scrollBox');
var box = document.getElementById('box');

next.addEventListener('click', () => {
    scrollBox.scrollBy({
        left: 300,
        behavior: 'smooth'
    })
})
prev.addEventListener('click', () => {
    scrollBox.scrollBy({
        left: -300,
        behavior: 'smooth'
    })

})