let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regexMessages = /^.{1,255}$/;

export const validationForm = (form) => {
  let error = {};
  if (!form.name.trim()) {
    error.name = 'El campo nombre es requerido';
  } else if (!regexName.test(form.name)) {
    error.name = 'El campo de Nombre solo acepta letras y espacios en blanco';
  }

  if (!form.email.trim()) {
    error.email = 'El campo email es requerido';
  } else if (!regexEmail.test(form.email)) {
    error.email = 'El Correo debe de contar con una @ y un dominio';
  }
  if (!form.message.trim()) {
    error.message = 'El campo mensaje es requerido';
  } else if (!regexMessages.test(form.message)) {
    error.message =
      'El campo mensaje debe de contener un máximo de 255 caracteres';
  }

  return error;
};
