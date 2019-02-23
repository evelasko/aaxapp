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
exports.registerPasswordValidation = yup
    .string()
    .min(3, exports.passwordNotLongEnough)
    .max(255)
    .required();
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
        .required(),
    password: yup
        .string()
        .min(3, invalidLogin)
        .max(255, invalidLogin)
        .required()
});
exports.changePasswordSchema = yup.object().shape({
    newPassword: exports.registerPasswordValidation
});
