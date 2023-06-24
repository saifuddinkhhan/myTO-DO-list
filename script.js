const inputBox=document.getElementById("input-box");
const listBox=document.getElementById("list-box");
function playtask(){
    if(inputBox.value === ''){
        alert("Write Something")
    }
    else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    listBox.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }
    inputBox.value ="";
}

listBox.addEventListener("click",function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("tick");
    }else if(event.target.tagName ==="SPAN"){
        event.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",listBox.innerHTML);
}

function show(){
    listBox.innerHTML=localStorage.getItem("data");
}
show();

