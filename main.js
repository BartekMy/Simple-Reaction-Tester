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
    
    var size = Math.random() * 200;
    
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


document.getElementById("form").onclick = function() {
    
    document.getElementById("form").style.display = "none";
    
    var end = new Date().getTime();
    
    var duration = (end - start) / 1000;
    
    document.getElementById("time").innerHTML = duration + "s";
    
    appearAfterDelay();
}