import React from 'react';
interface Props {
    loginSuccess: () => void;
    handleForgot: () => void;
    handleSignUp: () => void;
    handleGuest: () => void;
}
export declare const LoginConnector: React.FC<Props>;
export {};
