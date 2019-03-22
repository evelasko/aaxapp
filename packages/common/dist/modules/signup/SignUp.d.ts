import React from 'react';
interface Props {
    navToProfile: () => void;
    headerClear?: number;
}
export declare const styles: {
    signUpContainer: {
        paddingTop: number;
        backgroundColor: string;
        alignItems: "center";
        justifyContent: "space-between";
        position: "absolute";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    };
    signUpHeader: {
        width: string;
        flexDirection: "row";
        paddingLeft: number;
        marginTop: number;
    };
    signUpHeaderTitle: {
        textAlign: "center";
        alignSelf: "center";
        fontWeight: "bold";
        color: string;
        fontSize: number;
        paddingRight: number;
    };
    signUpFormContainer: {
        width: string;
        alignItems: "center";
        paddingLeft: number;
        paddingRight: number;
    };
    signUpInputs: {
        borderBottomColor: string;
        borderBottomWidth: number;
        marginBottom: number;
        marginTop: number;
        width: string;
        paddingBottom: number;
        height: number;
        fontSize: number;
        color: string;
    };
    signUpPick: {
        width: string;
        color: string;
    };
    signUpPickLabel: {
        fontSize: number;
        color: string;
    };
    signUpPickHeader: {
        fontSize: number;
        color: string;
        textAlign: "justify";
    };
    signUpButton: {
        marginBottom: number;
        alignSelf: "center";
    };
};
export default class SignUpComponent extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
