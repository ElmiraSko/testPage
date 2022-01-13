"use strict"

function setOpacity(e){     
    if(e.type==="click"){
        e.target.style.opacity = 0;
		e.target.style.cursor = "default";
	}
}

function deletingText(e){  
	if(e.keyCode == '32'){
		var n = document.getElementById("d-text");
		var cs = window.getComputedStyle(n);
		n.style.display = "none";	
	}	
}

var text = document.getElementById("d-text");

text.addEventListener("click", setOpacity);
document.addEventListener("keydown", deletingText);


