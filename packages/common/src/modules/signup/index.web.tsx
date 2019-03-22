import React from 'react';
import { RouteComponentProps } from 'react-router';
import SignUpComponent from './SignUp';


interface Props {}

const SignUp:React.FC<Props & RouteComponentProps> = ({history}) => {
    return <SignUpComponent navToProfile={() => {history.push('/profile') }} />
}
export default SignUp