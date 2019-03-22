import React from 'react';
import { Button, Text, View } from 'react-native';
import { Colors } from '../../ui/shared/Styles/SharedStyles';
import { styles } from './SignUp';

interface Props {
    navToProfile: () => void
}

const SignUpSuccess:React.FC<Props> = ({navToProfile}) => {
    return (
        <View style={styles.signUpContainer} >
            <View style={{width: '60%', marginTop: 50}}>
                <View style={{borderBottomColor:'grey', borderBottomWidth: 1, paddingBottom: 15}}>
                    <Text style={styles.signUpHeaderTitle}>
                        Cuenta Creada
                    </Text>
                </View>
                <View style={{alignContent: 'center', marginTop: 15}}>
                    <Text style={{fontSize: 16, color: 'silver'}}>
                        Hemos enviado un email a la dirección que ha indicado con instrucciones para activar su cuenta.
                    </Text>
                </View>
            </View>
            <View style={styles.signUpButton}>
                <Button title="ok" onPress={() => { navToProfile() }} color={Colors.primary}/>
            </View> 
        </View>
    )
}

export default SignUpSuccess