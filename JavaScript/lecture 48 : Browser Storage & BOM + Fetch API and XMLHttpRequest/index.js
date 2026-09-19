
// localStorage.setItem("num1" , 1)
// localStorage.setItem("num2" , 1)
localStorage.setItem("num4", 1)

let result = localStorage.getItem("nishant") // ye null dega kyu ki nishant key nhi hai localstorage mai
console.log(result);

let result2 = localStorage.key("0")
console.log(result2);

localStorage.removeItem("num")

document.querySelector("#clear-local-storage").addEventListener("click", () => {
    localStorage.clear()
})


document.querySelector("#add-session-item").addEventListener("click", () => {
    sessionStorage.setItem("session", "item")
})

