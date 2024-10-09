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
fn1(n1);fn2(n2);
function fn1(n){
    if(n==1)document.querySelector("img.img1").setAttribute("src","dice1.png");
    if(n==2)document.querySelector("img.img1").setAttribute("src","dice2.png");
    if(n==3)document.querySelector("img.img1").setAttribute("src","dice3.png");
    if(n==4)document.querySelector("img.img1").setAttribute("src","dice4.png");
    if(n==5)document.querySelector("img.img1").setAttribute("src","dice5.png");
    if(n==6)document.querySelector("img.img1").setAttribute("src","dice6.png");
}
function fn2(n){
    if(n==1)document.querySelector("img.img2").setAttribute("src","dice1.png");
    if(n==2)document.querySelector("img.img2").setAttribute("src","dice2.png");
    if(n==3)document.querySelector("img.img2").setAttribute("src","dice3.png");
    if(n==4)document.querySelector("img.img2").setAttribute("src","dice4.png");
    if(n==5)document.querySelector("img.img2").setAttribute("src","dice5.png");
    if(n==6)document.querySelector("img.img2").setAttribute("src","dice6.png");
}
