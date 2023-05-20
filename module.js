let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let  op = document.getElementById("op");
let res = document.getElementById("res");
let click = document.getElementById("click")

 function result(num1,num2,op,res){
    if(op.value == "+"){
        return res.innerHTML = parseInt(num1.value) + parseInt(num2.value);
    }if(op.value == "-"){
        return res.innerHTML = parseInt(num1.value) - parseInt(num2.value);
    }if(op.value  == "*"){
        return res.innerHTML = parseInt(num1.value) * parseInt(num2.value);
    }if(op.value  == "/"){
        return res.innerHTML = parseInt(num1.value) / parseInt(num2.value);
    }
}

export {num1,num2,op,res,click,result}