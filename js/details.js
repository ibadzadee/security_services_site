let id = new URLSearchParams(window.location.search).get("id");

// let element = document.querySelector(".element")

fetch(`http://localhost:3000/sevices${id}`)
    .then(reponse => reponse.json())
    .then(element => {
        id.innerHTML+= `
        <div class="card">
        <img src="${element.image}" alt="">
        <h4><a href="">${element.name}</a><h4>
        <p>${element.description}</p>
            <i class="bi bi-heart"></i>
            <button>Update</button>
            <button>Delete</button>
    </div>
        `
})

