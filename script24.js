// keypress event
// mouseover event

const body = document.body;

// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })

const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover",()=>{
    console.log("mouseover event ocuur!!! ");
})

const mainBut = document.querySelector(".btn-headline");
mainBut.addEventListener("mouseleave",()=>{
    console.log("mouseleave event occur!!!");
})