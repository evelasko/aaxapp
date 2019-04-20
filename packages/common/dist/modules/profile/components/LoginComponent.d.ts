import React from 'react';
interface Props {
    loginSuccess: (per: string) => void;
    handleForgot: () => void;
    handleSignUp: () => void;
    loginFailed: () => void;
}
export default class LoginComponent extends React.Component<Props> {
    setUser: (per: string) => Promise<void>;
    remountComponent: () => void;
    render(): JSX.Element;
}
export {};
