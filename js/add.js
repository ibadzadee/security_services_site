const form = document.querySelector("#form");
const imageInp = document.querySelector("#img");
const nameInp = document.querySelector("#name");
const descriptionInp = document.querySelector("#descripton");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let obj = {};
    let src = imageInp.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        obj = {
            image: e.target.result,
            name: nameInp.value,
            description: descriptionInp.value
        };
        axios.post(`http://localhost:3000/sevices`, obj)
            .then(res => {
                window.location = "../index.html";
            });
    };
    reader.readAsDataURL(src);
});
