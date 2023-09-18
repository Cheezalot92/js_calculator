'use strict'

let result = document.getElementById("answerGoHere");

let calculate =(number)=>{
    result.value+=number;
} 

let Result=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(err){
     alert("Wrong Answer");
    }
}

function clr(){
    result.value=" ";
}

function del(){
    result.value= result.value.slice(0,-1);
}