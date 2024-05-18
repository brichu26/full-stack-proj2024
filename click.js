// specify btn tools 
const deleteBn = document.querySelector("#delete");
const addBn = document.querySelector("#add");
const editBn = document.querySelector("#edit");


const addDialog = document.querySelector("#add-dialog");
const titleInput = document.querySelector("#title-input");
const detailInput = document.querySelector("#detail-input");
const dateInput = document.querySelector("#date-input");
const submitBtn = document.querySelector("#submit");
const closeBtn = document.querySelector("#close");

async function fetchJson(path, options = {}) {
    // TODO: handle errors
    const response = await fetch(path, options);
    const data = await response.json();
    return data;
}

async function postJson(path, body) {
    return fetchJson(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
}

const getTasks = () => fetchJson("/tasks");
const getTaskById = (id) => fetchJson(`/task/${id}`);
const addTask = (title, details, date) => postJson("/new", { title, details, date });
const deleteTaskById = (id) => fetchJson(`/delete/${id}`);


//event listeners (interactivity)
addBn.addEventListener("click", () => addDialog.showModal());
closeBn.addEventListener("click", () => addDialog.close());

submitBn.addEventListener("click", async () => {
    const titleText = titleInput.value.trim();
    const detailText = detailInput.value.trim();
    const dateText = dateInput.value.trim();

    if (titleText === "" || detailText === "" || dateText == null ) return;

    await addTask(titleText, detailText, dateText);
    await updateCards();

    titleText.value = "";
    detailText.value = "";

    addDialog.close();
});








// BB's part  
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