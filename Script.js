var n1 = Math.random();
n1=n1*6;
n1=Math.floor(n1)+1;
var n2 = Math.random();
n2=n2*6;
n2=Math.floor(n2)+1;
if(n1>n2){
    document.querySelector("h1").textContent="player1 wins";
}
else if(n1==n2){
    document.querySelector("h1").textContent="tie";
}
else{
    document.querySelector("h1").textContent="player2 wins";
}
var randomdice1="dice"+n1+".png";
var randomdice2="dice"+n2+".png";
document.querySelector("img.img1").setAttribute("src",randomdice1);
document.querySelector("img.img2").setAttribute("src",randomdice2);

