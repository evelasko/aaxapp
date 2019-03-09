import * as yup from "yup";

export const emailNotLongEnough = "email debe tener al menos 3 caracteres";
export const passwordNotLongEnough = "la contraseña debe tener al menos 3 caracteres";
export const invalidEmail = "debe introducir una dirección de email válida";

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255)
  .required();

export const validUserSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: registerPasswordValidation
});

const invalidLogin = "invalid login";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, invalidLogin)
    .max(255, invalidLogin)
    .email(invalidLogin)
    .required(),
  password: yup
    .string()
    .min(3, invalidLogin)
    .max(255, invalidLogin)
    .required()
});

export const changePasswordSchema = yup.object().shape({
  newPassword: registerPasswordValidation
});

export const validPasswordSchema = yup.object().shape({
  password: yup
      .string()
      .min(8, passwordNotLongEnough)
      .max(255)
      .required()    
})