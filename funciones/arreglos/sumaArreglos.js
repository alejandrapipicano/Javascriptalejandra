function sumaArreglos(){
   let numero=[3,7,9,4,2];
   let numero1=[2,5,7,3,9];
   let respuesta=[];
    for(let i=0; i< numero.length; i++){
    respuesta[i]=numero[i]+numero1[i];
    }
    console.log(respuesta);
}
sumaArreglos();