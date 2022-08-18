var msg;
var msgEncrypt;
var msgDecrypt;
var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btnCopy = document.querySelector("#btn-copy");
var ESuccessful = "Encrypted!";
var DSuccessful = "Decrypted!";
var Mayus = /[A-Z]/g;
var Char = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;´.,áéíóúàèìòù']/g;
var yes = "";
var no = "none";

// Acciones a botones
btn1.onclick = Encrypt;
btn2.onclick = Decrypt;
btnCopy.onclick = ToCopy;

// Pantalla resultados
function ShowResult(ver){
  document.getElementById("conteiner-result")
          .style
          .display = ver;  
  document.getElementById("btn-copy")
          .style
          .display = ver;
  document.getElementById("result")
          .style
          .display = ver;
}

document.getElementById("toy")
        .style
        .display = "";
ShowResult(no);

//Encriptar
function Encrypt(){
  msgEncrypt = "";
  document.getElementById("toy")
          .style
          .display = "none";
  msg = document.querySelector("#inputText")
                .value;
  if(msg == ""){
    show(0);
    document.getElementById("toy")
            .style
            .display = "";
    ShowResult(no);
  }else if (msg.match(Mayus)){
    show(1);
    document.getElementById("toy")
            .style
            .display = "";
  }else if (msg.match(Char)){
    show(2);
    document.getElementById("toy")
            .style
            .display = "";
  }else{
    for(var i = 0; i < msg.length; i++){
      if(msg[i] == "a"){
        var ToEncrypt = msg[i]
                        .replace("a", "159",);
        msgEncrypt += ToEncrypt;
      }else if(msg[i] == "e"){
        var ToEncrypt = msg[i]
                        .replace("e", "487");
        msgEncrypt += ToEncrypt;
      }else if(msg[i] == "i"){
        var ToEncrypt = msg[i]
                        .replace("i", "879");
        msgEncrypt += ToEncrypt;
      }else if(msg[i] == "o"){
        var ToEncrypt = msg[i]
                        .replace("o", "747");
        msgEncrypt += ToEncrypt;
      }else if(msg[i] == "u"){
        var ToEncrypt = msg[i]
                        .replace("u", "126");
        msgEncrypt += ToEncrypt;
      }else{
        msgEncrypt += msg[i];
      }
  }
      document.getElementById("title-result")
              .innerHTML=ESuccessful;
      document.getElementById("result")
              .innerHTML=msgEncrypt;
      document.getElementById("inputText")
              .value = "";
      ShowResult(yes);
  }
}

// Copiar resultado
function ToCopy(){
  var copy = document.getElementById("result")
                     .select();
  document.execCommand('copy');  
}

//Desencriptar
function Decrypt(){
  msgDecrypt = "";
  document.getElementById("toy")
          .style
          .display = "none";
  msg = document.querySelector("#inputText")
                .value;
  if(msg == ""){
    show(0);
    ShowResult(no);
    document.getElementById("toy")
            .style
            .display = "";
    }else if (msg.match(Mayus)){
        show(1)
        ShowResult(no);
        document.getElementById("toy")
                .style
                .display = "";
    }else if (msg.match(Char)){
        show(2)
        ShowResult(no);
        document.getElementById("toy")
                .style
                .display = "";
    }else{
      msgDecrypt = msg.replace(/159/g, "a")
                      .replace(/487/g,"e")
                      .replace(/879/g,"i")
                      .replace(/747/g,"o")
                      .replace(/126/g,"u");

      document.getElementById("result")
              .innerHTML = msgDecrypt;
      document.getElementById("title-result")
              .innerHTML = DSuccessful;
      ShowResult(yes);
      document.getElementById("inputText")
              .value = ""
    }
}

function show(code){
  switch (code) {
    case 0:
      alert("This operation cannot be performed without text.");
      break;

    case 1:
      alert("This operation does not allow the use of capital letters. Try again.");
      break;

    case 2:
      alert("This operation does not allow the use of accented vowels and/or special characters.");
      break;
  
    default:
      break;
  }
}