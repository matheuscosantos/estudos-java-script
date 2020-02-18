//console.log("Carregou o JavaScript externo");

//var titulo = document.querySelector(".titulo");
//Imprime a tag titulo completa
//console.log(titulo)
//Imprime somente o texto da tag titulo
//console.log(titulo.textContent);	
//Muda o conteudo de texto do titulo
//titulo.textContent = "Banana";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){   

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var calcImc = peso / (altura * altura);    

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }else{
        tdImc.textContent = calcImc.toFixed(2);
    }

    if(altura <= 0 || altura >= 3){
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }else{
        tdImc.textContent = calcImc.toFixed(2);
    }
}


