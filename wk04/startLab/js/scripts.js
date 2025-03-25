const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeBox");
const dialogBoxText = document.querySelector("#dialogBox div");




openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "apple 95 cal"
})

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "orange 45 cal"
})

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "banana 105 cal"
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
})



