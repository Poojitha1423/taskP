

let counterVal = 0;
 
let forCountDisplay=document.getElementById("counterlabel")

function incrementCounter(){
   counterFunction= setInterval(function counter(){
    counterVal=counterVal+1;
//forCountDisplay.innerHTML=counterVal ;},1000)
document.getElementById("counterlabel").innerHTML=`count= ${counterVal}`;},1000)
    }

function stopCounter(){
   clearInterval(counterFunction);
}


function resetCounter() {
    clearInterval(counterFunction);
    counterVal=counterVal*0;
    document.getElementById("counterlabel").innerHTML=" ";
 

}


