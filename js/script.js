const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

const container = document.getElementById("issuesContainer")
const issueCount = document.getElementById("issueCount")

const modal = document.getElementById("issueModal")
const modalBody = document.getElementById("modalBody")

const searchBtn = document.getElementById("new-btn")

let allIssues = []

/* LOAD ISSUES */

async function loadIssues(status="all"){

const res = await fetch(API)
const data = await res.json()

allIssues = data.data

let filtered = allIssues

if(status==="open"){
filtered = allIssues.filter(i=>i.status==="open")
}

if(status==="closed"){
filtered = allIssues.filter(i=>i.status==="closed")
}

issueCount.innerText = filtered.length

renderIssues(filtered)

setActiveTab(status)

}

window.onload = () => loadIssues()



/* RENDER CARDS */

function renderIssues(issues){

container.innerHTML=""

issues.forEach(issue=>{

const card=document.createElement("div")

card.className=`issue-card ${issue.status}`

card.onclick=()=>openModal(issue.id)

card.innerHTML=`

    <div class="card-top">

        <div class="status-circle">
            <img src="./assets/${issue.status}.png">
        </div>

        <div class="priority ${issue.priority.toLowerCase()}">
        ${issue.priority}
        </div>

    </div>

    <h3 class="issue-title">${issue.title}</h3>

    <p class="issue-desc">
    ${issue.description}
    </p>

    <div class="labels">

        <div class="label bug">
            <img src="./assets/bug.png">
            BUG
        </div>

        <div class="label help">
            <img src="./assets/help.png">
            HELP WANTED
        </div>

    </div>

    <div class="card-footer">

        <p>#${issue.id} by ${issue.author}</p>

        <p>${formatDate(issue.createdAt)}</p>

    </div>

`

container.appendChild(card)

})

}





/* SEARCH  */

async function searchIssues(){

const text = document.getElementById("searchInput").value.trim()

if(text === ""){
loadIssues()
return
}

const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)

const data = await res.json()

renderIssues(data.data)

issueCount.innerText = data.data.length

}




/* MODAL */

async function openModal(id){

const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)

const data = await res.json()

const issue = data.data

modalBody.innerHTML=`

    <h2 class="modal-title">${issue.title}</h2>

    <div class="modal-meta">

        <span class="status-pill ${issue.status}">
        ${issue.status==="open"?"Opened":"Closed"}
        </span>

        <span>Opened by ${issue.author}</span>

        <span>${formatDate(issue.createdAt)}</span>

    </div>


    <div class="labels modal-labels">

        <div class="label bug">
            <img src="./assets/bug.png"> BUG
        </div>

        <div class="label help">
            <img src="./assets/help.png"> HELP WANTED
        </div>

    </div>


    <p class="modal-desc">
    ${issue.description}
    </p>


    <div class="modal-box">

        <div>
            <p class="box-title">Assignee:</p>
            <p class="box-value">${issue.author}</p>
        </div>

        <div>
            <p class="box-title">Priority:</p>
            <span class="priority ${issue.priority.toLowerCase()}">
            ${issue.priority}
            </span>
        </div>

    </div>

    <div class="modal-actions">
        <button onclick="closeModal()">Close</button>
    </div>

`

modal.style.display="flex"

}



function closeModal(){
modal.style.display="none"
}



/* ACTIVE TAB */

function setActiveTab(status){

const tabs=document.querySelectorAll(".tab")

tabs.forEach(t=>t.classList.remove("active"))

if(status==="all")tabs[0].classList.add("active")
if(status==="open")tabs[1].classList.add("active")
if(status==="closed")tabs[2].classList.add("active")

}



/* DATE FORMAT */

function formatDate(date){

const d=new Date(date)

return `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`

}