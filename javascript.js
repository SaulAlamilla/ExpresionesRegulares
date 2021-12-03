//Ejercicio 22
//Alumno: Saul Alamilla Calixto
//No. Control: 18390023
function validar(){
    let cadena = document.getElementById("cadena").value;
    let expReg2 = /^(\s*<\?php\s*)([a-zA-Z_][0-9]*)+(\s*\?>\s*)/i;

    console.log(expReg2.test(cadena));
    if (expReg2.test(cadena)){
        window.location = "datos.html";
    }else{
        alert("Cadena inválida");
    }
}