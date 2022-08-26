/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */
function pruebasValidarNombre(){
    console.assert
    (validarNombre('') === "El nombre debe tener mas de 1 caracter", 
    "la funcion validar Nombre no pudo validar con un nombre vacio",
    );

    console.assert
    (validarNombre('asdhjqwkejklasdnmkqwjeiasjdklqweiouhjajsdfjknsdjhfbqjweijqwkdlansdjakwsenqjoweansmdl') === "El nombre debe tener menos de 25 caracteres",
    "la funcion validar Nombre no pudo validar con un nombre mayor a 25 caracteres", 
    );

    console.assert(
    validarNombre('Alejandro') === "",
    "La funcion validar nombre no pudo validar con un nombre",
    );

    console.assert(
    validarNombre("11111111111") === "El nombre solo debe tener letras",
    "La funcion validar Nombre no pudo validar que el nombre solo tenga letras"
    );
}

function pruebasValidarCiudad(){
    console.assert
    (validarCiudad('') === "el campo ciudad no puede estar vacio",
    "Las funcion validar ciudad no paso con un valor nulo");

    console.assert(
    validarCiudad('Buenos Aires') === "",
    "La funcion de validar ciudad no pudo validar con un valor correcto"
    )
}

function pruebasValidarDescripcionRegalo(){
    console.assert
    (validarDescripcionRegalo('') === "La descripcion no puede estar vacia",
    "La funcion validar descripcion no pudo validar que la informacion no sea vacio"
    )

    console.assert
    (validarDescripcionRegalo('kasjdklñqjwejasdjklqwjekloasdnmklamsdkqlwejaskdjkalsdjkqlwejiosdfcmnlxcvnjkjesdfkljasodljkqwpejkasldkjmaskdjlaksdjkqwejipoasmndklajmsdiopqwjekalsdnmkalsmdawjeipnjsdgfkjlndsjkalsdjklasjdlkqjweklonasdklajweikjqskldnmasdhngfjolksdfhnglksjdfñklasjdfklsdjhfklsjdfhndjsfghnaskldñfjklasdfjkoñwejriklasñdnfksdjafñnglbknxvcbnhasjkldhfjwheruiojnsbhdjfkghwedfhskjidfhjksadhfjksadhfjklsadhfkjsadhfjksadhfjksadhfjkasdhfjkasdhfkljsadfhjksdfhjskdflhjskadfhjksdfhjskdfhsjkdfhsjkadfhjskdfhjskdfhjaskdfhsjakdfhsjkadfhsajkdfhijrhewuiohfjsadnkfnbvxcdv')>= "la descripcion no puede exceder los 350 caracteres",
    "La funcion validar descripcion regalo no pudo validar que la descripcion sea menor a 350 caracteres",
    )
    
    console.assert(
    validarDescripcionRegalo("Regalo quiero que sea lindo") === "",
    "La funcion validar descripcion regalo no pudo validar con la descripcion correcta",
    )

    console.assert(
    validarDescripcionRegalo("@@@-_--") === "La descripcion del regalo solo puede tener numeros y letras",
    "La funcion validar descripcion no pudo validar que el campo solo tenga numeros y letras"
    )
 }

pruebasValidarNombre()
pruebasValidarCiudad()
pruebasValidarDescripcionRegalo()
