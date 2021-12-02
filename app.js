let AR = document.getElementById("AR");
let FR = document.getElementById("FR");
let result = document.getElementById("result");

AR.onclick = () => {
    setLanguge("AR");
    localStorage.setItem("Lang" , "AR");
};

FR.onclick = () => {
    setLanguge("FR");
    localStorage.setItem("Lang" , "FR");
};

onload = () => {
    setLanguge(localStorage.getItem("Lang"))
}

function setLanguge(getLanguge) {
    if(getLanguge === "AR") {
        result.innerHTML = "داني دانـــــــــــــي"
    } else if (getLanguge === "FR") {
        result.innerHTML = "EL_BODI"
    }
}