// Button is click
const btns = document.querySelector(".cal__send");
// Function Map: string -> function
const mdas = {
    add: add,
    sub: sub,
    mul: mul,
    div: div
};
// Function that call a function
function calculator(num1, num2, mdasFunc) {
    return mdasFunc(num1, num2);
}
function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}

btns.addEventListener("click", () => {
    const mdasKey = document.querySelector(".cal__pick").value;
    const mdasFunc = mdas[mdasKey]; // Convert string to function
    const num1 = Number(document.querySelector(".cal__numOne").value);
    const num2 = Number(document.querySelector(".cal__numTwo").value);
    const disp = document.querySelector(".cal__result");

    if(typeof mdasFunc === "function") {
        const result = calculator(num1, num2, mdasFunc);
        disp.textContent = `Results: ${result}`;
    } else {
        disp.textContent = `Wrong operator.`;
    }
});