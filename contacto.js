function borrar() {
    document.getElementById("myForm").reset();
 }
  

 function validarDatos() {
    
    // Get the value of the input field with id="numb"
    let fields = [[document.getElementById("nombre").value, document.getElementById("falla")] ,[document.getElementById("apellido").value,document.getElementById("falla2")] ];
    let x = document.getElementById("email").value;
    let y = document.getElementById("asunto").value;
    let z = document.getElementById("msg").value;
    let w = document.getElementById("asunto").value
   
    // If x is Not a Number or less than one or greater than 10
    fields.forEach( e => {
        let text;
        if(e[0].length ==0){
            alert('El nombre y apellido deben estar completos');
        }else{
        if (/^[a-zA-Z]+$/.test(e[0])) {
          text = "";
        } else {
            text="Tipo de dato no valido";
        //   console.log("Datos no validos")
        }
        e[1].innerHTML = text;
        text="";
    }
   });

    let text;
    let regex1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(x.length==0){
        alert('El email debe estar completo');
    }else{
    if (regex1.test(x)){
        text="";
    }else{
        text="Tipo de dato no valido";
    }
    document.getElementById("falla3").innerHTML = text;
    text="";
    }

    if(z.length == 0) {
        alert('El mensaje debe estar completo');
        return;
      }

    if(w.length == 0) {
        alert('El asunto debe estar completo');
    return;
    }

    document.getElementById("myForm").submit();

}
