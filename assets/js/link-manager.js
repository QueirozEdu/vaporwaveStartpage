const linkManagerToggleButton = document.querySelector("#imaginator");
const linkManager = document.querySelector(".linkManager");
const closeButton = document.querySelector(".close");
const background = document.querySelector(".container-inner");



linkManagerToggleButton.addEventListener("click", () => {
    background.classList.toggle("blurBackground");
    linkManager.classList.toggle("linkManagerInvisible");
});
closeButton.addEventListener("click", () => {
    background.classList.toggle("blurBackground");
    linkManager.classList.add("linkManagerInvisible")

})

const linkName = document.querySelector("#linkName");

let linkData = 0;



async function getData() {
    let dataResponse = await fetch("../assets/js/data.json");
    dataResponse = await dataResponse.json();
    console.log(dataResponse[0].name);
    linkName.innerText = dataResponse[0].name;
    return dataResponse;
}
getData()