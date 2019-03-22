import * as yup from "yup";
export declare const emailNotLongEnough = "email debe tener al menos 3 caracteres";
export declare const passwordNotLongEnough = "la contrase\u00F1a debe tener al menos 3 caracteres";
export declare const invalidEmail = "debe introducir una direcci\u00F3n de email v\u00E1lida";
export declare const passwordRequired = "debe introducir una contrase\u00F1a";
export declare const emailRequired = "debe introducir una direcci\u00F3n de email";
export declare const registerPasswordValidation: yup.StringSchema;
export declare const userSignUpSchema: yup.ObjectSchema<yup.Shape<{}, {
    email: string;
    password: string;
    name: string;
    lastname: string;
}>>;
export declare const validUserSchema: yup.ObjectSchema<yup.Shape<{}, {
    email: string;
    password: string;
}>>;
export declare const loginSchema: yup.ObjectSchema<yup.Shape<{}, {
    email: string;
    password: string;
}>>;
export declare const changePasswordSchema: yup.ObjectSchema<yup.Shape<{}, {
    newPassword: string;
}>>;
export declare const validPasswordSchema: yup.ObjectSchema<yup.Shape<{}, {
    password: string;
}>>;
