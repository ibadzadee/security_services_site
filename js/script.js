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

fetch(`http://localhost:3000/sevices`)
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        bottom.innerHTML +=`
        <div class="card" >
        <img src="${element.image}" alt="">
        <h4><a href="">${element.name}</a><h4>
        <p>${element.description}</p>
            <i class="bi bi-heart"></i>
            <button onclick="update(${element.id})">Update</button>
            <button onclick="deleteCard(${element.id})">Delete</button>
            <button onclick="details(${element.id})">View Details</button>
    </div>
    `
    })
}) 
const update = (id)=>{
    console.log(id);
}

const details = (id)=>{
    window.location = `./details.html?id=${id}`
    // console.log(id);
}

function deleteCard(id) {
    axios.delete(`http://localhost:3000/sevices/${id}`)
     window.location.reload()
}