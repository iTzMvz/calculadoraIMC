function calcula_imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    const imc = (peso / altura ** 2).toFixed(2)

    if (imc < 15.99) {
        resultado.innerHTML = `Nome: ${nome}</br>IMC: ${imc} </br> Magreza Grave`
        resultado.style.color = "red"
    }
    else if (imc >= 16 && imc <= 16.99) {
        resultado.innerHTML = `Nome: ${nome}</br>IMC: ${imc} </br> Magreza Moderada`
        resultado.style.color = "orange"
    }
    else if (imc >= 17 && imc <= 18.49) {
        resultado.innerHTML = `Nome: ${nome}</br>IMC: ${imc} </br> Magreza Leve`
        resultado.style.color = "yellow"
    }
    else if (imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = `Nome: ${nome}</br>IMC: ${imc} </br> Saudável`
        resultado.style.color = "green"
    }
    else if (imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `Nome: ${nome}</br>IMC: ${imc} </br> Sobrepeso`
        resultado.style.color = "yellow"
    }
    else if (imc >= 30 && imc <= 34.9) {
        resultado.innerHTML = `Nome: ${nome}</br>IMC: ${imc} </br> Obesidade Grau 1`
        resultado.style.color = "orange"
    }
    else if (imc >= 35 && imc <= 39.9) {
        resultado.innerHTML = `Nome: ${nome}</br>IMC: ${imc} </br> Obesidade Grau 2 (Severa)`
        resultado.style.color = "red"
    }
    else {        
        resultado.innerHTML = `Nome: ${nome}</br>IMC: ${imc} </br> Obesidade Grau 3 (Mórbida)`
        resultado.style.color = "red"
    }
    }
