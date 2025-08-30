function resta (num1,num2)
{
    let resultado = num1 - num2;
    alert ("el resultado de la resta es:" + resultado);
}

function suma (num1,num2)
{
    let resultado = num1 + num2;
    alert ("el resultado de la suma es:" + resultado);

}

function mult (num1,num2)
{
    let resultado = num1 * num2;
    alert("el resultado de la mult es:" + resultado);
}

function divicion (num1,num2)
{
    let resultado = num1 / num2;
    alert("el resultado de la divicion es:" + resultado);
}

function mod (num1,num2)
{
    let resultado = num1 % num2;
    alert("el resultado del mod es:"+ resultado);

}
let n1 = parseInt( prompt("digite num1"));
let n2 =parseInt( prompt("digite num2"));
resta(n1,n2);
suma(n1,n2);
mult(n1,n2);
divicion(n1,n2);
mod(n1,n2);
