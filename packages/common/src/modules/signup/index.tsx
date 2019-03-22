import { Constants } from 'expo';
import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import SignUpComponent from './SignUp';

const SignUp:React.FC<NavigationScreenProps> = ({navigation}) => {
    return  <SignUpComponent 
                navToProfile={() => {navigation.navigate('Profile')}}
                headerClear={Constants.statusBarHeight + 10}
            />
}

export default SignUp