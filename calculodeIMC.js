let peso = parseFloat(prompt("ingrese su peso"));
let estatura = parseFloat(prompt("ingrese su estatura"));
let IMC= peso/(estatura*estatura);

if (IMC < 18.5) {
    alert("bajo peso");
} else if(IMC>= 18.5 && IMC <25){
    alert("peso normal");
}else if(IMC>=25 && IMC<30){
    alert("sobre peso");
}else if (IMC>=30){
    alert("obesidad");
}


