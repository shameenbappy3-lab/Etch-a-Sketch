let container = document.querySelector(".container")
for(let i = 0;i < 256; i++){
    let div = document.createElement("div");
    div.classList.add('square');
    div.addEventListener("mouseenter",function(){
        div.style.backgroundColor = 'black';
    })
    container.appendChild(div);
}

let btn = document.createElement("button");
btn.textContent = "Click Me";
btn.classList.add("button")
document.body.insertBefore(btn,container);


btn.addEventListener("click",function(){
    let input = Number(prompt("Please enter what square size grid you want?(max number 30)",30));
    if(input > 30) input = 30;
    grid = input * input
    squareSize = 956/input;
    container.innerHTML = "";
    for(let i = 0; i < grid; i++){
        let div = document.createElement("div");
        div.classList.add("square");
        div.style.width = squareSize + "px";
        div.style.height = squareSize + "px";
        div.addEventListener("mouseenter",function(){
            div.style.backgroundColor = "black"
        })
        container.appendChild(div);

    }
})



