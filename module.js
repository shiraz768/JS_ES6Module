let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let  op = document.getElementById("op");
let res = document.getElementById("res");

export function result(){
    if(op.value == "+"){
        return res.innerHTML = num1.value + num2.value;
    }if(op.value == "-"){
        return res.innerHTML = num1.value - num2.value;
    }if(op.value == "*"){
        return res.innerHTML = num1.value * num2.value;
    }if(op.value == "/"){
        return res.innerHTML = num1.value / num2.value;
    }
}

export {num1,num2,op,res}