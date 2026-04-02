var form = document.getElementById("form");

var cpfs = ["123", "456"]; // exemplo

form.addEventListener("submit", function (e) {

    e.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;
}