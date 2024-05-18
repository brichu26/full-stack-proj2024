const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container"); 


function saveProgress() { 
    localStorage.setItem("progress", listContainer.innerHTML); 
}

function showProgress() { 
    listContainer.innerHTML = localStorage.getItem("progress"); 
}

function addTasks() { 
    if (!(inputBox.value === '')) { 
        let li = document.createElement("li"); 
        li.innerHTML = inputBox.value; 
        listContainer.appendChild(li); 
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7"; 
        li.appendChild(span); 
    } else { 
        alert("You must input something!");
    }
    inputBox.value = ""; 
    saveProgress(); 
}

listContainer.addEventListener("click", function(e){ 
    if (e.target.tagName === "SPAN") { 
        e.target.parentElement.remove(); 
        saveProgress();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
        saveProgress(); 
        
    }
}, false); 



showProgress(); 