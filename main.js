var start = new Date().getTime();

function makeFormAppear(){
    
    document.getElementById("form").style.display = "block";
    
    start = new Date().getTime();
    
}

setTimeout(makeFormAppear, Math.random() * 2000);



document.getElementById("form").onclick = function() {
    
    document.getElementById("form").style.display = "none";
    
    var end = new Date().getTime();
    
    var duration = (end - start) / 1000;
    
    document.getElementById("time").innerHTML = duration + "s";
}