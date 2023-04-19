const form = document.getElementById('form') as HTMLFormElement;//Captura del form
const btnGuardar = document.getElementById('btn-guardar') as HTMLButtonElement;//Captura el boton guardar

btnGuardar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Ingreso a la validación del formulario');
    //Validación del formulario

    //Obtener los valores de los inputs (Capturar)
    const tipoDni = document.getElementById('tipoDni') as HTMLSelectElement;
    const tipoDocu = parseInt(tipoDni.value);//Convertimos a entero tipoDni, ya que su valor por defecto es string
    const numberDni = document.getElementById('numberDni') as HTMLInputElement;
    const numberDocu = parseInt(numberDni.value);//Convertimos a entero numberDni, ya que su valor por defecto es string
    const name = document.getElementById('name') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;
    const telefono = parseInt(phone.value);//Convertimos a entero phone, ya que su valor por defecto es string
    const email = document.getElementById('email') as HTMLInputElement;
    const linkedin = document.getElementById('linkedin') as HTMLInputElement;
    const github = document.getElementById('github') as HTMLInputElement;

    
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6ODA4Nzk0MTMsImNvcnJlbyI6Ik5lbHNwZXJAZ21haWwuY29tIiwiaWF0IjoxNjgxNzg0ODk2LCJleHAiOjE2ODIzODk2OTZ9.ZOYdPGFBxwfPrfna-MB6jIxQN5T6Za6XT-gNfeAGhzY");

    let raw = JSON.stringify({
        "tipoIdentificacion": tipoDocu,
        "numeroIdentificacion": numberDocu,
        "nombres": name.value,
        "apellidos": lastName.value,
        "celular": telefono,
        "correo": email.value,
        "linkedin": linkedin.value,
        "github": github.value
    });
    //console.log(raw);

    function validarFormulario(){
        if (!tipoDocu) {
            alert('Debe seleccionar un tipo de documento');
            return;
        }
        if(isNaN(numberDocu)){
            alert("El tipo de documento debe ser númerico")
            return;
        }
        if(!numberDocu){
            alert('Debe ingresar un número de identificación');
            return;
        }
        if (/^\d+$/.test(name.value)) { //Expresión regular para verificar si la cadena contiene números
            alert("El nombre no debe contener números.");
            return;
        }
        if(!name.value && name.value === ""){
            alert('Debe ingresar sus nombres');
            return;
        }
        if (/^\d+$/.test(lastName.value)) { //Expresión regular para verificar si la cadena contiene números
            alert("El apellido no debe contener números.");
            return;
        }
        if(!lastName.value && lastName.value === ""){
            alert('Debe ingresar sus apellidos');
            return;
        }
        // if(isNaN(telefono)){
        //     alert("El teléfono debe ser númerico")
        //     return;
        // }
        if(!telefono){
            alert('Debe ingresar su número de teléfono');
            return;
        }
        if(!email.value && email.value === ""){
            alert('Debe ingresar su correo electrónico');
            return;
        }
        if(!linkedin.value && linkedin.value === ""){
            alert('Debe ingresar su link de Linkedin');
            return;
        }
        if(!github.value && github.value === ""){
            alert('Debe ingresar su link de GitHub');
            return;
        }
    }
    validarFormulario();
    console.log(raw);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        //redirect: 'follow'
        };

    fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
});
