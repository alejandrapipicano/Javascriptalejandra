function nota (){
  let nota=[];
  //agragar push notas[posision]
    for(let  i=0; i < 5; i = i+1){
      let datos = parseFloat(prompt("ingrese sus notas" +i));
      nota[i]=datos
    
      
      
    }
    alert("las notas ingrsadas son:" + nota)
}
nota();