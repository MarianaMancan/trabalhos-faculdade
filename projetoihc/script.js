function validar() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if (name.value === "") {
        alert("Nome não informado");
        name.focus();

        return;
    }

    if (email.value === "") {
        alert("Email não informado");
        email.focus();

        return;
    }

    if (password.value === "") {
        alert("Senha não informada");
        password.focus();

        return;
    }
}
