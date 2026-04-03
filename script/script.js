var form = document.getElementById("form");

var cpfs = ["123", "456"]; // exemplo

form.addEventListener("submit", function (e)) {

    e.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;
    var idade = document.getElementById("idade").value;
    var cidade = document.getElementById("cidade").value;
    var moradia = document.getElementById("moradia").value;
    var quintal = document.getElementById("quintal").value;
    var pet = document.getElementById("pet").value;
    var horas = document.getElementById("horas").value;
    var motivo = document.getElementById("motivo").value;
    var termo = document.getElementById("termo").checked;

    if (nome.length < 3) {
        alert("Nome inválido");
        return;
    }

    if (email.indexOf("@") == -1) {
        alert("Email inválido");
        return;
    }

    if (telefone.length < 8) {
        alert("Telefone inválido");
        return;
    }

    if (cpf == "") {
        alert("CPF obrigatório");
        return;
    }

    if (cpfs.indexOf(cpf) != -1) {
        alert("CPF já existe");
        return;
    }

    if (idade < 18) {
        alert("Precisa ser maior de idade");
        return;
    }

    if (cidade == "") {
        alert("Cidade obrigatória");
        return;
    }

    if (moradia == "") {
        alert("Escolha a moradia");
        return;
    }

    if (quintal == "") {
        alert("Informe o quintal");
        return;
    }

    if (pet == "") {
        alert("Informe se já teve pet");
        return;
    }

    if (horas == "" || isNaN(horas)) {
        alert("Horas inválidas");
        return;
    }
    
    if (motivo.length < 10) {
        alert("Motivo muito curto");
        return;
    }

}