"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeErrors = function (errors) {
    var errMap = {};
    errors.forEach(function (err) {
        errMap[err.path] = err.message;
    });
    return errMap;
};
