import gql from 'graphql-tag';
import React from 'react';
import { ActivityIndicator, Alert, Platform, Text, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { RouteComponentProps } from 'react-router';
import { client } from '../../apollo';

const confirmEmailMutation = gql`
    mutation ConfirmEmailMutation ( $key: String! ) 
    { confirmEmail( key: $key ) { token error } }   
`

interface Props extends RouteComponentProps<{ key: string }> {}

const EmailConfirm:React.FC<Props & NavigationScreenProps> = ({history, match, navigation}) => {
    const key = match && match.params.key ? match.params.key : navigation.getParam('key')
    let message = "UNO"
    client.mutate({mutation: confirmEmailMutation, variables: {key}}).then((res) => {
        if ( res.data &&  res.data.confirmEmail.token ) {
            const alertTitle = 'Confirmación de Email'
            const alertText = 'Hemos confirmado tu dirección de email, ya puedes iniciar sesión a tu cuenta.'
            if (Platform.OS === 'web') { 
                alert(alertText)
                console.log('MADE IT!')
                history.push('/login')
            } 
            else { 
                Alert.alert(alertTitle, alertText, [{text: 'ok', onPress: () => {navigation.navigate('Profile')}}]) 
            }
        }
    })
    return ( 
        <View>
            <ActivityIndicator />
            <Text>{message}</Text>
        </View>
    )
}

export default EmailConfirm