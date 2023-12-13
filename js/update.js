let id = new URLSearchParams(window.location.search).get("id");

let name  = document.querySelector('#name');
let category = document.querySelector('.category');
let modalImage = document.querySelector('.modalImage');
let categoryForm = document.querySelector('.category-form');
let submit = document.querySelector('.submit');
let file = document.querySelector('input[type="file"]');

fetch(`http://localhost:3000/sevices/${id}`)
.then(res => res.json())
.then(data => {
    modalImage.src = data.image
    name.value = data.name;
    category.value = data.description;
})

file.addEventListener('input', (e) => {
    let file = e.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            modalImage.src = reader.result;
        }
    }
})

categoryForm.addEventListener("submit", (event) => {
    event.preventDefault()
    axios.put(`http://localhost:3000/sevices/${id}`, {
        image: modalImage.src,
        name: name.value,
        description: category.value
    })
    .then(res=>{
        window.location="../index.html"
    })
})






// const id = new URLSearchParams(window.location.search).get("id");

// const nameInp = document.querySelector("#name");
// const descriptionInp = document.querySelector("#descripton");
// const imageInp = document.querySelector("#img");


// // const form = document.querySelector("#form");

// // axios.get(`http://localhost:3000/sevices/${id}`)
// //     .then(response => {
// //         const data = response.data;
// //         nameInp.value = data.name;
// //         descriptionInp.value = data.description;
// //     })
// //     .catch(error => {
// //         console.error("Error fetching service data:", error);
// //     });

// // form.addEventListener("submit", function (event) {
// //     event.preventDefault();

// //     const obj = {
// //         name: nameInp.value,
// //         description: descriptionInp.value
// //     };

// //     if (imageInp.files.length > 0) {
// //         const src = imageInp.files[0];
// //         const reader = new FileReader();
// //         reader.onload = function (e) {
// //             obj.image = e.target.result;
// //             updateService(obj);
// //         };
// //         reader.readAsDataURL(src);
// //     } else {
// //         // No image selected, update without image
// //         updateService(obj);
// //     }
// // });

// // function updateService(obj) {
// //     axios.put(`http://localhost:3000/sevices/${id}`, obj)
// //         .then(res => {
// //             window.location = "../index.html";
// //         })
// // }