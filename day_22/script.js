let body = document.querySelector("body")
let div = document.querySelector("div")
let num=1;
for(let i=2;i<num;i++){
    if(num%i!=0){
        let box = document.createElement("div")
        box.textContent = i
        box.style.width = "150px";
        box.style.height = "120px"
        box.style.backgroundColor = "blue"
        box.style.margin = "8px";
        div.appendChild(box)
    }
    num++;
}
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        let box = document.createElement("div")
        box.textContent = i
        box.style.width = "150px";
        box.style.height = "120px"
        box.style.backgroundColor = "red"
        box.style.margin = "8px";
        div.appendChild(box)
    } else {
        let box = document.createElement("div")
        box.textContent = i;
        box.style.width = "150px";
        box.style.height = "120px";
        box.style.backgroundColor = "pink"
        box.style.margin = "8px";
        div.appendChild(box)
    }
}