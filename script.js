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