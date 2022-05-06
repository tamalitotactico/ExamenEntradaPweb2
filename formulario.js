let nombre = "";
let apellido = "";
let nacimiento = "";

function nameToLastName(){
    nombre = document.getElementById("inputValue").value;
    if(nombre == ""){
        document.getElementById("bandejaDeError").innerHTML = `<p id="bandejaDeError" class="text-danger">¡Vaya! Parece que te olvidaste llenar esto.</p>`;
    }   else {
        document.getElementById("label").innerHTML = `<label id="label" class="fs-4 text-light">Apellido: </label>`;
        document.getElementById("inputText").innerHTML = `
        <input id="inputValue" type="text" class="form-control" placeholder="Ingrese su Apellido">
        <div id="bandejaDeError"></div>
        `;
        document.getElementById("boton").innerHTML = `<input type="button" class="btn border-light text-light" onclick="lastNameToBirth()" type="" value="Siguiente">`;
    }
}

function lastNameToBirth(){
    apellido = document.getElementById("inputValue").value;
    if(apellido == ""){
        document.getElementById("bandejaDeError").innerHTML = `<p id="bandejaDeError" class="text-danger">¡Vaya! Parece que te olvidaste llenar esto.</p>`;
    }   else {
        document.getElementById("label").innerHTML = `<label id="label" class="fs-4 text-light">Nacimiento: </label>`;
        document.getElementById("inputText").innerHTML = `
        <input id="inputValue" type="text" class="form-control" placeholder="xx/xx/xxxx">
        <div id="bandejaDeError"></div>
        `;
        document.getElementById("boton").innerHTML = `<input type="button" class="btn border-light text-light" onclick="showWelcome()" type="" value="Registrar">`;
    }

}

function showWelcome(){
    nacimiento = document.getElementById("inputValue").value;
    let edad = 2022-parseInt(nacimiento.substring(6,10));
    let imagen;
    if(edad<15){
        imagen = `<img width="150" height="200" src="https://images.vexels.com/media/users/3/215587/isolated/preview/a388618a1b80e18d1fb2db3ccc84d74b-feliz-personaje-de-nino-sentado-plano.png">`;
    }   else if (edad>=15 && edad<25){
        imagen = `<img width="100" height="200" src="https://cdn.pixabay.com/photo/2020/10/16/19/40/man-5660543_960_720.png">`;
    }   else if (edad>=25 && edad<50){
        imagen = `<img width="200" height="200" src="https://images.vexels.com/media/users/3/175535/isolated/preview/7206865561bf45af453fa84335297977-hombre-fleco-postura-plano-persona.png">`;
    }   else if (edad>=50 && edad<100){
        imagen = `<img width="150" height="200" src="https://images.vexels.com/media/users/3/209056/isolated/lists/38a415492985340aea03bc5744ae2304-caracter-de-anciano-tatuado.png">`;
    }   else {
        imagen = `<img width="200" height="150" src="https://www3.gobiernodecanarias.org/medusa/wiki/images/5/55/Momia.png">`;
    }
    main =`
    <div class="d-flex w-100">
        <div class="w-100 text-center" ><p class="text-light fs-2" style="margin-top:70px;">Usted tiene `+edad+` años</p></div>
        <div class="" p-0 >`+imagen+`</div>
    </div>
    `;
    if(nacimiento == ""){
        document.getElementById("bandejaDeError").innerHTML = `<p id="bandejaDeError" class="text-danger">¡Vaya! Parece que te olvidaste llenar esto.</p>`;
    }   else {
        document.getElementById("title").innerHTML = '<h1 class="text-dark text-center text-size-3">Bienvenido '+nombre+" "+apellido+'</h1>';
        document.getElementById("main").innerHTML = main;
    }
}