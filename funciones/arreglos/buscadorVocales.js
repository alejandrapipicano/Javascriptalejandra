function buscar(vocalB){

    let vocales=["a","e","i","o","u"];
    for (let i=0; i < vocales.length; i++){
        if (vocales[i] == vocalB){
            console.log("la vocal si existe")
            

        }
        else{
            console.log("vocal no existe");
        
    }
}

}
let b = prompt("ingreses la vocal a buscar");
buscar(b);