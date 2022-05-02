
function tapButtonClick1() {
        console.log("привет");
      }

button.addEventListener("click", tapButtonClick1);

buttonid.style.background = "yellow";






"use strict";
let n = 0;
let i=0;
const button = document.getElementById("buttonid");

let colorArray=['#3498db','#e74c3c','#f1c40f','#8e44ad'];




button.addEventListener("click", tapButtonClick);
button.addEventListener("click", changeColor);
button.addEventListener('click', animista);
button.addEventListener('animationend', animistaStop);


function tapButtonClick() {
  button.innerHTML = `ты нажал на меня ${n} раз`;
  n++; 
}


function changeColor(){
  button.style.background= colorArray[i];
    i++
    if(i>3){i=0;}
}

function animista () { 
  button.classList.add('slide-in-blurred-right');
}



function animistaStop(){
  button.classList.remove('slide-in-blurred-right');
}

/*let arr= ['s','f','d','g','q','q','n','m','z','x','c','i','p'];
let currentArray=[];

function testArr(){
  let result;
  for(let i=0; i<arr.length; i++) {
    
   if(currentArray.includes(arr[i]))
    {result=currentArray.length;
       currentArray=[]
    }
    
  else{
    currentArray.push(arr[i]);
  }}
  
  return result
 
}
console.log(testArr());
*/

let arr= [1,2,3,4,1,2,3]; 
 
function testArr(){ 
    let currentArray=[]; 
    let record = 0; 
  for(let i=0; i<arr.length; i++) { 
        if(currentArray.includes(arr[i])) { 
         record =currentArray.length ;
        } else { 
           currentArray.push(arr[i]) 
        } 
    } 
    
    return record 
} 
console.log(testArr());


