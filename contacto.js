// let boton = document.getElementById("boton1");
// boton.addEventListener("click", () => {
// console.log("Datos cargados");
// });;

function validarDatos() {
    // Get the value of the input field with id="numb"
    let fields = [[document.getElementById("nombre").value, document.getElementById("falla")] ,[document.getElementById("apellido").value,document.getElementById("falla2")] ];
    let x = document.getElementById("email").value;
    let y = document.getElementById("asunto").value;
    let z = document.getElementById("msg").value;
    console.log(y)
    // If x is Not a Number or less than one or greater than 10
    fields.forEach( e => {
        let text;
        if (/^[a-zA-Z]+$/.test(e[0])) {
          text = "";
        } else {
            text="Tipo de dato no valido";
        //   console.log("Datos no validos")
        }
        e[1].innerHTML = text;
        text="";
   });

    let text;
    let regex1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (regex1.test(x)){
        text="";
    }else{
        text="Tipo de dato no valido";
    }
    document.getElementById("falla3").innerHTML = text;
    text="";

}


function borrar() {
    document.getElementById("myForm").reset();
 }


