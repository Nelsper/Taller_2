const form = document.getElementById('form') as HTMLFormElement;//Captura del form
const btnGuardar = document.getElementById('btn-guardar') as HTMLButtonElement;//Captura el boton guardar

btnGuardar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Ingreso a la validación del formulario');
    //Validación del formulario

    //Obtener los valores de los inputs (Capturar)
    const tipoDni = document.getElementById('tipoDni') as HTMLSelectElement;
    const numberDni = document.getElementById('numberDni') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;
    const lastName = document.getElementById('lastName') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const linkedin = document.getElementById('linkedin') as HTMLInputElement;
    const github = document.getElementById('github') as HTMLInputElement;

    console.log(tipoDni.value);
});
