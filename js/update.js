// const id = new URLSearchParams(window.location.search).get("id");

// const nameInp = document.querySelector("#name");
// const descriptionInp = document.querySelector("#descripton");
// const imageInp = document.querySelector("#img");

// const form = document.querySelector("#form");

// axios.get(`http://localhost:3000/sevices/${id}`)
//     .then(response => {
//         const data = response.data;
//         nameInp.value = data.name;
//         descriptionInp.value = data.description;
//     })
//     .catch(error => {
//         console.error("Error fetching service data:", error);
//     });

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const obj = {
//         name: nameInp.value,
//         description: descriptionInp.value
//     };

//     if (imageInp.files.length > 0) {
//         const src = imageInp.files[0];
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             obj.image = e.target.result;
//             updateService(obj);
//         };
//         reader.readAsDataURL(src);
//     } else {
//         // No image selected, update without image
//         updateService(obj);
//     }
// });

// function updateService(obj) {
//     axios.put(`http://localhost:3000/sevices/${id}`, obj)
//         .then(res => {
//             window.location = "../index.html";
//         })
//         .catch(error => {
//             console.error("Error updating service:", error);
//         });
// }
