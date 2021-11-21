function checkAndAdd() {
    let inputs = document.getElementsByClassName("form-control");

    let inputInvalid = false;

    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            inputs[i].classList.add("is-invalid");
            inputInvalid = true;
        }
    }
    if (inputInvalid) {
        return;
    }


    let tr1 = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = document.getElementById("Vorname").value;

    let td2 = document.createElement("td");
    td2.innerHTML = document.getElementById("Nachname").value;

    let td3 = document.createElement("td");
    td3.innerHTML = document.getElementById("E-Mail-Adresse").value;

    let td4 = document.createElement("td");
    td4.innerHTML = document.getElementById("IP-Adresse").value;

    let td5 = document.createElement("td");

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    tr1.appendChild(td5);

    let tbody = document.getElementsByTagName("tbody");
    let inputForm = document.getElementsByClassName("needs-validation");

    tbody[0].insertBefore(tr1, inputForm[0]);


    emptyInputBox(inputs);

}

function emptyInputBox(inputs) {
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        inputs[i].classList.remove("is-invalid");
    }
}

