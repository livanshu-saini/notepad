// alert("hello ji kidda");

var input = document.querySelector(".input-box");
const saveBtn = document.querySelector(".save-btn");
const clearBtn = document.querySelector(".clear-btn");

const data = JSON.parse(localStorage.getItem("note"));
input.value=data;


clearBtn.addEventListener("click",()=>
{
    localStorage.clear();
    input.value="";
})


saveBtn.addEventListener('click',()=>
{
    console.log(input.value)

    localStorage.setItem("note",JSON.stringify(input.value));
})

