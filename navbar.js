let menDiv = document.querySelector("#men");
menDiv.addEventListener("click", menClick);
let womenDiv = document.querySelector("#women");
womenDiv.addEventListener("click", womenClick);
let kidsDiv = document.querySelector("#kids");
kidsDiv.addEventListener("click", kidsClick);

function menClick(){
   localStorage.setItem("clickedOn", "Men");
   window.location.href = "productsPage.html";
}
function womenClick(){
   localStorage.setItem("clickedOn", "Women");
   window.location.href = "productsPage.html";
}
function kidsClick() {
   localStorage.setItem("clickedOn", "Kids");
   window.location.href = "productsPage.html"
}