const header = document.querySelector("header")
const headTop = document.querySelector("header .top")
const headBottom = document.querySelector("header .bottom")
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.style.background = "black"
        header.style.opacity = ".9"
        headTop.style.padding = "5px 0px"
        headBottom.style.padding = "10px 0px"
    }
    else {
        header.style.background = ""
        header.style.opacity = ""
        headTop.style.padding = "10px 0px"
        headBottom.style.padding = "20px 0px"
    }
})

const bottom = document.querySelector("#services .bottom")

const loadBtn = document.querySelector("#loadBtn")

let page = 1
function getDataJson(){
fetch(`http://localhost:3000/sevices?_page=${page}&_limit=3`)
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        bottom.innerHTML +=`
        <div class="card" >
        <img src="${element.image}" alt="">
        <h4><a href="">${element.name}</a><h4>
        <p>${element.description}</p>
            <i onclick="addFavorite(${element.id})" class="bi bi-heart"></i>
            <div class="buttons">
            <button id="update" onclick="update(${element.id})">Update</button>
            <button id="delete" onclick="deleteCard(${element.id})">Delete</button>
            <button id="detail" onclick="details(${element.id})">View Details</button>
            </div>
            </div>`
    })
}) 
}
getDataJson()
loadBtn.addEventListener("click", () =>{
    page++;
    getDataJson();
})

const update = (id)=>{
    window.location = `./update.html?id=${id}`
}

const details = (id)=>{
    window.location = `./details.html?id=${id}`
    // console.log(id);
}

function deleteCard(id) {
    axios.delete(`http://localhost:3000/sevices/${id}`)
     window.location.reload()
}

// Add Favorite 
heart = document.querySelector(".bi-heart")
function addFavorite(id){
    axios.get(`http://localhost:3000/sevices/${id}`)
    .then(res =>{
        axios.post(`http://localhost:3000/favorites` , res.data)
    })
}