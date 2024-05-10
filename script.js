let passOne = document.querySelector("#first-password");
let passTwo = document.querySelector("#confirm-password");

passOne.addEventListener("input", () => {
    console.log(passOne.value);
    console.log(passTwo.value);
    if (passOne.value != passTwo.value) {
        passOne.style.border = "1px solid red";
        passTwo.style.border = "1px solid red";
    } else {
        passOne.style.border = "1px solid #989898";
        passTwo.style.border = "1px solid #989898";
    }
});

passTwo.addEventListener("input", () => {
    if (passOne.value != passTwo.value) {
        passOne.style.border = "1px solid red";
        passTwo.style.border = "1px solid red";
    } else {
        passOne.style.border = "1px solid #989898";
        passTwo.style.border = "1px solid #989898";
    }
});