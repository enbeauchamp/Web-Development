var time=0;
var clickedTime; var createdTime; var reactionTime;
var newBorder;     
var letters = '0123456789ABCDEF'.split(''); // letters array
var color = '#';
var boxDiv = document.getElementById("box");

function getRandomColor() {
    color = '#';
    for (var i=0; i<6; i++ ) {
        color += letters[Math.round(Math.random()*15)];
    }
    return color;
}
       
function makeBox () {

    setTimeout(function() {
        boxDiv.style.left = 500*Math.random()+"px";
        boxDiv.style.top = 500*Math.random()+"px";
        time = 1000*Math.random()+500;
        
        newBorder = 100*Math.round(Math.random());
        boxDiv.style.backgroundColor = getRandomColor();

        boxDiv.style.borderRadius = newBorder+"px";
        boxDiv.style.visibility = "visible";
        createdTime = Date.now();
    }, time);
}

boxDiv.onclick = function() {
    clickedTime = Date.now();
    reactionTime = (clickedTime-createdTime)/1000;
    document.getElementById("time").innerHTML = reactionTime;
    this.style.visibility = "hidden";
    makeBox();
}

makeBox();
