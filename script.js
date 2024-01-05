var time=60;
var score=0;
var hitNo=0;
function incScore(){
  score+=10;
  document.querySelector("#scoreVal").textContent=score;
}


function MakeBubble(){
  var bub="";
for(var i=0;i<=128;i++){
  var rn=Math.floor(Math.random()*10);
    bub+=`<div class="bubble">${rn}</div>`;
}
document.querySelector(".bottom").innerHTML=bub;
}
function runTime(){
 var timer= setInterval(function(){
    if(time>0){
    time--;
     document.querySelector("#timer").textContent=time;
    }
    else{
      clearInterval(timer);
    }
  },1000)
}
   function hit(){
      hitNo=Math.floor(Math.random()*10);
     document.querySelector("#hit").textContent=hitNo;
   }

document.querySelector(".bottom").addEventListener("click",function(dets){
  var clickedNum=Number(dets.target.textContent);
  if(clickedNum===hitNo)
  {
    incScore();
    MakeBubble();
    hit();
  }
});


runTime();
MakeBubble();
hit();
