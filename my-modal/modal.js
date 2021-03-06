let openModalBtn = document.querySelector(".modal-open-btn");
let mymodal = document.querySelector(".modal");
let modalCloseBtn = document.querySelector(".close-modal");

openModalBtn.onclick = function (e) {
  console.log("Clicked on Open");
  mymodal.style.display = "block";
  document.querySelector("body").style.backgroundColor = "rgb(0,0,0,0.5)";
};

modalCloseBtn.onclick = closeModal;

function closeModal(e) {
  mymodal.style.display = "none";
  document.querySelector("body").style.backgroundColor = "antiquewhite";
}

document.addEventListener("click", handleClickOnDoc);

function handleClickOnDoc(e) {
  console.log("Clicked on the document: ", e);
  if (
    !e.target.closest(".modal") &&
    !e.target.classList.contains("modal-open-btn")
  ) {
    closeModal(e);
  }
}

(function () {
  console.log("I'm the IIFE!");
})();

//Async IIFE
(async function () {
  let url =
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commitsnklnk";
  let response = await fetch(url);

  if (response.ok) {
    let commits = await response.json(); // read response body and parse as JSON
    alert(commits[0].author.login);
  } else {
    console.log("Request failed");
  }
})();
