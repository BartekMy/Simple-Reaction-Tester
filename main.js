var start = new Date().getTime();

function makeFormAppear(){
    
    var top = Math.random() * 400;
    
    var left = Math.random() * 400;
    
    document.getElementById("form").style.top = top + "px";
    
    document.getElementById("form").style.left = left + "px";
    
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