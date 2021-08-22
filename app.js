const colors =["green", "red","white","purple","pink", "blue", "rgba(133,122,200)",
"#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
//    get random number betwee 0-3
const randomNumber = getRandomNumber();
console.log(randomNumber);

// const randomNumber =1;
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    // return Math.random()*colors.length;
    return Math.floor(Math.random() * colors.length); 
    // floor function helps in rounding off numbers to the nearest interger
}