let inc=document.getElementById("inc");
let disValue=document.getElementById("dis");
let dec=document.getElementById("dec");
let reset=document.getElementById("reset");

inc.addEventListener("click",()=>{
    const value=Number(disValue.innerText);
    
        disValue.innerText=value+1;
    
   // alert("Now, Score is " + (value+1))
})

dec.addEventListener("click",()=>{
    const value=Number(disValue.innerText);
    if(value>0)
    {
        disValue.innerText=value-1;
        alert("Now, Score is " + (value-1))

    }
    else {
        alert("Negative value not acceptable")
        
    }
})

reset.addEventListener("click",()=>{
    
        disValue.innerText=0;
        alert("Value set to Zero")

    
})


reset.addEventListener("dblclick", () => {
    disValue.innerText = 0;
    alert("Value set to Zero");
});

// Key press event
document.addEventListener("keypress", (event) => {
    if (event.key === "r") { // Press "r" key to reset
        disValue.innerText = 0;
        alert("Value set to Zero");
    }
});

// Key down event
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") { // Press arrow up key to increment
        const value = Number(disValue.innerText);
        disValue.innerText = value + 1;
        alert("Now, Score is " + (value + 1));
    } else if (event.key === "ArrowDown") { // Press arrow down key to decrement
        const value = Number(disValue.innerText);
        if (value > 0) {
            disValue.innerText = value - 1;
            alert("Now, Score is " + (value - 1));
        } else {
            alert("Negative value not acceptable");
        }
    }
});