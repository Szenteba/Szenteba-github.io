var utolso = "";
function showModal(elem) { 
    document.getElementById("myModal").style.display = "block";
}
/*---*/
function closeModal() { 
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModal2").style.display = "none";
}

var imgElement = document.getElementById("myImage");
if (imgElement) {
    console.log(imgElement.src);
    console.log("SRC relatív:", imgElement.getAttribute("src")); 
} else {
    console.error("Az elem nem található!");
    };
var imgsrc = imgElement.getAttribute("src");
console.log(imgsrc);
/*---*/
function Close_all() {
    document.getElementById("Kezdőlap").style.display = "none";
    document.getElementById("Aukció").style.display = "none";
    document.getElementById("Limited_edition").style.display = "none";
    document.getElementById("V2").style.display = "none";
    document.getElementById("V3").style.display = "none";
    document.getElementById("V4").style.display = "none";
}

function Display_Main() {
    document.getElementById("Kezdőlap").style.display = "block";
    document.getElementById("Aukció").style.display = "none";
    document.getElementById("Limited_edition").style.display = "none";
}

function Aukció() {
    document.getElementById("Kezdőlap").style.display = "none";
    document.getElementById("Limited_edition").style.display = "none";
    document.getElementById("Aukció").style.display = "block";
}

function Limited_edition() {
        document.getElementById("Kezdőlap").style.display = "none";
    document.getElementById("Aukció").style.display = "none";
    document.getElementById("Limited_edition").style.display = "block";
}

function Nhentai() {
    open(URL('www.nhenai.net'));
}

function showModal2() { 
    document.getElementById("myModal2").style.display = "block";
}
/*---*/
function closeModal2() { 
    window.open("https://nhentai.to/", "_blank");
    document.getElementById("myModal2").style.display = "none";
}