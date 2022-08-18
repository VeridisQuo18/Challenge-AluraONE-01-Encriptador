
var botonUno = document.querySelector("#btn1");
var botonCopiar = document.querySelector("#btn-copy");

var encriptacionExitosa = "TEXTO ENCRIPTADO:";
var desencriptacionExitosa = "TEXTO DESENCRIPTADO:";


var si = "";
var no = "none";

function resultado(ver){
  document.getElementById("conteiner-resultado").style.display = ver;  
  document.getElementById("btn-copy").style.display = ver;
  document.getElementById("resultado").style.display = ver;
}

document.getElementById("toy").style.display = "";

resultado(no);

//Encriptar
function encriptar(){
  document.getElementById("toy").style.display = "none";
  var msjEncriptado = "";
  var mensaje = document.querySelector("#introducir-texto").value;
  var mayus = /[A-Z]/g;
  var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

  if(mensaje == ""){
    alert("no debe estar vacio");
    document.getElementById("toy").style.display = "";
    resultado(no)
  }else if (mensaje.match(mayus) != mensaje.match(mayus)){
      alert("No puede contener mayusculas");
      document.getElementById("toy").style.display = "";
  }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
      alert("no puede contener acentos ni caracteres especiales");
      document.getElementById("toy").style.display = "";
  }else{
    for(var i = 0; i < mensaje.length; i++){
    if(mensaje[i] == "a"){
      var encriptando = mensaje[i].replace("a","ai",);
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "e"){
      var encriptando = mensaje[i].replace("e","enter");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "i"){
      var encriptando = mensaje[i].replace("i","imes");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "o"){
      var encriptando = mensaje[i].replace("o","ober");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "u"){
      var encriptando = mensaje[i].replace("u","ufat");
      msjEncriptado = msjEncriptado + encriptando;
  }else{
      msjEncriptado = msjEncriptado + mensaje[i];
    }
  }
      document.getElementById("titulo-resultado").innerHTML=encriptacionExitosa;
      document.getElementById("resultado").innerHTML=msjEncriptado;
      document.getElementById("introducir-texto").value = "";
      resultado(si)
  }
}

botonUno.onclick = encriptar;

// Copiar resultado
function copiarPortapapeles(){

  var copiado = document.getElementById("resultado");
  copiado.select();
  document.execCommand('copy');  

}

botonCopiar.onclick = copiarPortapapeles;

//Desencriptar
var botonDos = document.querySelector("#btn2");
var mensaje = document.querySelector("#introducir-texto").value


function desencriptar(){
    document.getElementById("toy").style.display = "none";
    var msjDesencriptado = "";
    var mensaje = document.querySelector("#introducir-texto").value;
    var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if(mensaje == ""){
        alert("Necesita ingresar texto");
        resultado(no)
        document.getElementById("toy").style.display = "";
    }else if (mensaje.match(mayus)!= mensaje.match(mayus)){
        alert("No se admiten mayusculas")
        resultado(no)
        document.getElementById("toy").style.display = "";
    }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
        alert("No se aceptan acentos y/o caracteres especiales")    
        resultado(no);
        document.getElementById("toy").style.display = "";
    }else{
    msjDesencriptado = mensaje.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u"); 
    document.getElementById("resultado").innerHTML=msjDesencriptado;
    document.getElementById("titulo-resultado").innerHTML=desencriptacionExitosa;
  
    resultado(si)
    document.getElementById("introducir-texto").value = ""
    }
    
}

  botonDos.onclick = desencriptar;