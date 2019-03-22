import React from 'react';
interface Props {
    loginSuccess: (per: string) => void;
    handleForgot: () => void;
    handleSignUp: () => void;
}
export declare const LoginConnector: React.FC<Props>;
export {};
