const invalidtext1 = document.getElementById("text-1");
const invalidtext2 = document.getElementById("text-2");
const button1 = document.getElementById("button-1");
const button2=document.getElementById("button-2");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");


button1.addEventListener("click", ()=>{
  if(!input1.checkValidity()){
        invalidtext1.style.display="block";
        invalidtext1.style.color="#EF4877";
  }else{
    invalidtext.style.display="none"
  }
});

button2.addEventListener("click",()=>{
    if(!input2.checkValidity()){
        invalidtext2.style.display="block"
    }else{
        invalidtext2.style.display="none"
    }
})