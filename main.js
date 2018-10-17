var start = new Date().getTime();

document.getElementById("form").onclick = function() {
    
    document.getElementById("form").style.display = "none";
    
    var end = new Date().getTime();
    
    var duration = end - start;
    
    alert(duration);
    
}