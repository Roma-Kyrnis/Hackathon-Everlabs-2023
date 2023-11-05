const dropdown = document.querySelector(".dropbtn");
const content = document.querySelector(".dropdown-content");
dropdown.addEventListener("click", ()=>{
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
})