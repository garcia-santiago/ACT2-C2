const usuarios = [
    {
        id: 1002092590,
        nombre: "Juan",
        apellido: "Perez",
        celular: 3645693215,
        correo: "j.perez@asl.com",
        direccion: "Cra 66#74-80 Apto 3",
        salario: 2500000,
        departamento: "Sistemas"
    },
    {
        id: 5541450,
        nombre: "María",
        apellido: "Rodriguez",
        celular: 3001545978,
        correo: "m.rodriguez@asl.com",
        direccion: "Cra 20#45-9 Casa 2",
        salario: 2200000,
        departamento: "Sistemas"
    },
    {
        id: 1000154305,
        nombre: "miguel",
        apellido: "gonzalez",
        celular: 30124747894,
        correo: "m.gonzalez@asl.com",
        direccion: "Calle 8#9-20 ",
        salario: 2200000,
        departamento: "Sistemas"
    }
]
const tabla1 = document.querySelector('#tabla1');

function listar() {

    while (tabla1.children.length > 0) {
        tabla1.removeChild(tabla1.lastChild);
    }

    usuarios.forEach(usuario => {
        const fila = document.createElement('tr');
        fila.classList.add("table-light");

        for (const campo in usuario) {

            const celda = document.createElement('td');
            celda.classList.add("table-light");
            celda.innerText = usuario[campo]
            fila.appendChild(celda)
        }

        tabla1.appendChild(fila)
    })
}

function registrar(){
    
    const inputID = parseInt(document.querySelector('#id').value);
    const inputNombre = document.querySelector('#nombre').value;
    const inputApellido = document.querySelector('#apellido').value;
    const inputCelular = parseInt(document.querySelector('#celular').value);
    const inputCorreo = document.querySelector('#correo').value;
    const inputDireccion = document.querySelector('#direccion').value;
    const inputSalario = parseInt(document.querySelector('#salario').value);
    const inputDepartamento = document.querySelector('#departamento').value;

    if(!inputID || !inputNombre || !inputApellido || !inputCelular || !inputCorreo || !inputDireccion || !inputSalario || !inputDepartamento){
        error("Campos sin llenar o texto en campo de número")
    }
    else{
        if(usuarios.find( u => u.id === inputID)){
            error("ID ya registrado!");
        }
        else{
            usuarios.push({
                id: inputID,
                nombre: inputNombre,
                apellido: inputApellido,
                celular: inputCelular,
                correo: inputCorreo,
                direccion: inputDireccion,
                salario: inputSalario,
                departamento: inputDepartamento
            })
            listar();
        }
    }
}

function error(msg){
    const errorDiv = document.createElement('div');
    
    // Remove current error message
    errorDiv.innerHTML = `<div class="alert alert-danger alert-dismissible d-flex align-items-center mt-3 w-50 mx-auto fade show" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
    <div>
      ${msg}
    </div>
  </div>`;

    const mainTag = document.querySelector('#main')
    
    mainTag.insertBefore(errorDiv, mainTag.firstChild);

}