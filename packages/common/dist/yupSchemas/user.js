"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var yup = __importStar(require("yup"));
exports.emailNotLongEnough = "email debe tener al menos 3 caracteres";
exports.passwordNotLongEnough = "la contraseña debe tener al menos 3 caracteres";
exports.invalidEmail = "debe introducir una dirección de email válida";
exports.passwordRequired = "debe introducir una contraseña";
exports.emailRequired = "debe introducir una dirección de email";
exports.registerPasswordValidation = yup
    .string()
    .min(3, exports.passwordNotLongEnough)
    .max(255)
    .required(exports.passwordRequired);
exports.userSignUpSchema = yup.object().shape({
    email: yup.string().min(3, exports.emailNotLongEnough).max(255).email(exports.invalidEmail).required(exports.emailRequired),
    password: exports.registerPasswordValidation,
    name: yup.string().required('debe especificar su nombre'),
    lastname: yup.string().required('debe especificar sus apellidos')
});
exports.validUserSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, exports.emailNotLongEnough)
        .max(255)
        .email(exports.invalidEmail)
        .required(),
    password: exports.registerPasswordValidation
});
var invalidLogin = "invalid login";
exports.loginSchema = yup.object().shape({
    email: yup
        .string()
        .min(3, invalidLogin)
        .max(255, invalidLogin)
        .email(invalidLogin)
        .required(exports.emailRequired),
    password: yup
        .string()
        .min(3, invalidLogin)
        .max(255, invalidLogin)
        .required(exports.passwordRequired)
});
exports.changePasswordSchema = yup.object().shape({
    newPassword: exports.registerPasswordValidation
});
exports.validPasswordSchema = yup.object().shape({
    password: yup
        .string()
        .min(8, exports.passwordNotLongEnough)
        .max(255)
        .required()
});
