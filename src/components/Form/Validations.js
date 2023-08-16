export const validateEmail = (email) => {
  const regexEmail = /^\w+([\3.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/;

  if (!email) return "El email esta vacio";

  if (!regexEmail.test(email)) return "Email inválido";

  if (email.length > 35) return "Email debe tener como máximo 35 caracteres";

  return "";
};

export const validatePassword = (password) => {
  if (!password) return "El password esta vacio";

  if (password.length < 6 || password.length > 10)
    return "Debe contener entre 6 y 10 caracteres";

  if (!/\d/.test(password)) return "Debe contener un numero";

  return "";
};
