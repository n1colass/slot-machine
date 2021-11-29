document.querySelector('.name_player').innerHTML = prompt("Enter your name: ","Guest");
if(!document.querySelector('.name_player').innerHTML){
  document.querySelector('.name_player').innerHTML = "Guest";
}
let round = 0;
document.querySelector(".round").innerHTML = `Round ${round} of 3`;
let result;
function slot(selector){
  let img = ["seven","grape","gem","cherry"];
  let randomImg2;
  let main = setInterval(() => {
    let randomImg1 = img[Math.floor(Math.random() * img.length)];
    document.querySelector(`${selector}`).children[0].src = `img/${randomImg1}.svg`;

    randomImg2 = img[Math.floor(Math.random() * img.length)];
    document.querySelector(`${selector}`).children[1].src = `img/${randomImg2}.svg`;
    
    let randomImg3 = img[Math.floor(Math.random() * img.length)];
    document.querySelector(`${selector}`).children[2].src = `img/${randomImg3}.svg`;

  }, 150);
 setTimeout(() => {
   clearInterval(main);
   console.log(randomImg2);
   result = randomImg2;
   return result;
 }, 3000);
}

document.querySelector(".btn").onclick = function game(){
  document.querySelector('.btn').setAttribute("disabled","disabled");
let clear = setTimeout(function() {
  document.querySelector('.btn').removeAttribute("disabled");
}, 9200)   
  round++;
  document.querySelector(".round").innerHTML = `Round ${round} of 3`;
  let result1,result2,result3;
  slot(".column-1");
setTimeout(() => {
  slot(".column-2");
  result1 = result;
 }, 3000);
setTimeout(() => {
 slot(".column-3");
 result2 = result;
 }, 6100);
setTimeout(() => {
  result3 = result;
  console.log(result1,result2,result3);
if(result3 == result2){
    if(result2 == result1){
      alert("My congratulations, you win a lot of money!!!");
      window.location.reload(true);
    }
  } else if(round == 3){
    alert("You have good try !&!\nPress OK and try again !1!");
      window.location.reload(true);
  }

 /*  if(round == 3){
    alert("You have good try !&!\nPress OK and try again !1!");
      window.location.reload(true);
  }  */
}, 9200);
}