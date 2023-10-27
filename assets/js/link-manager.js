const linkManagerToggleButton = document.querySelector("#imaginator");
const linkManager = document.querySelector(".linkManager");
const closeButton = document.querySelector(".close");
const background = document.querySelector(".container-inner");



linkManagerToggleButton.addEventListener("click", () => {
    background.classList.toggle("blurBackground")
    linkManager.classList.toggle("linkManagerInvisible");
    closeButton.addEventListener("click", () => {
        console.log("teste");
        linkManager.classList.add("linkManagerInvisible")

    });
})