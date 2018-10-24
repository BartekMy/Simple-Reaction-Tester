var start = new Date().getTime();

function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

function makeFormAppear(){
    
    var top = Math.random() * 400;
    
    var left = Math.random() * 400;
    
    var size = (Math.random() * 100) + 100;
    
    if(Math.random() >= 0.5){
        
        document.getElementById("form").style.borderRadius = "50%";
        
    } else {
        
        document.getElementById("form").style.borderRadius = "0";
        
    }
    
    document.getElementById("form").style.backgroundColor = getRandomColor();
    
    document.getElementById("form").style.top = top + "px";
    
    document.getElementById("form").style.left = left + "px";
    
    document.getElementById("form").style.width = size + "px";
    
    document.getElementById("form").style.height = size + "px";
    
    document.getElementById("form").style.display = "block";
    
    start = new Date().getTime();
    
}

function appearAfterDelay(){
    
    setTimeout(makeFormAppear, Math.random() * 2000);
    
}

appearAfterDelay();


var bestTime = Number.POSITIVE_INFINITY;

var lastTime;

document.getElementById("form").onclick = function() {
    
    document.getElementById("form").style.display = "none";
    
    var end = new Date().getTime();
    
    lastTime = (end - start) / 1000;

                
    if(bestTime > lastTime) {
        bestTime = lastTime;
    }

    document.getElementById("time").innerHTML = lastTime + " sec."  ;

    document.getElementById("best").innerHTML = bestTime + " sec.";
    
    appearAfterDelay();
}