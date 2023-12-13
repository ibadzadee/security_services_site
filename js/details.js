let id = new URLSearchParams(window.location.search).get("id");

detailPage = document.querySelector("#details .details-center")

fetch(`http://localhost:3000/sevices/${id}`)
        .then(reponse => reponse.json())
        .then(element => {
            detailPage.innerHTML+= `  
            <div class="card">
            <img src="${element.image}" alt="">
            <h4><a href="">${element.name}</a><h4>
            <p>${element.description}</p>
                <i class="bi bi-heart"></i>
        </div>`
})



