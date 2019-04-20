import { Field, Formik } from 'formik';
import gql from 'graphql-tag';
import React from 'react';
import { Mutation } from 'react-apollo';
import { ActivityIndicator, Button, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CloseIcon from '../../ui/icons/close/index';
import { InputField } from '../../ui/shared/InputField';
import { SelectField } from '../../ui/shared/SelectField/index';
import { Colors } from '../../ui/shared/Styles/index';
import { userSignUpSchema } from '../../yupSchemas/user';
import SignUpSuccess from './SignUpSuccess';

const signUpUserMutation = gql`
    mutation SignUpUserMutation (   $email: String!, 
                                    $password: String!, 
                                    $name: String!, 
                                    $lastname: String!,
                                    $groupRequest: UserGroup
                                    $nID: String,
                                    $nIDType: nIdType
                                ) 
    {
        signUpUser( data: { email: $email, 
                            password: $password,
                            name: $name, lastname: $lastname,
                            groupRequest: $groupRequest,
                            nID: $nID, nIDType: $nIDType
                        } 
                    )
        { token error } 
    }   
`

interface Props {
    navToProfile: () => void
    headerClear?: number
}

export const styles = StyleSheet.create({
    signUpContainer: {
        ...StyleSheet.absoluteFillObject, paddingTop: Platform.OS == 'web' ? 20 : 40,
        backgroundColor: Colors.dark, alignItems: 'center',
        justifyContent: 'space-between'
    },
    signUpHeader: { width: '100%', flexDirection: 'row', paddingLeft: 20, marginTop: 30},
    signUpHeaderTitle: { textAlign: 'center', alignSelf:'center', fontWeight: 'bold', color: 'silver', fontSize:18, paddingRight: 40},
    signUpFormContainer: { width: '100%', alignItems: 'center', paddingLeft:40, paddingRight: 40 },
    signUpInputs: {
        borderBottomColor: "rgba(0,0,0,0.3)", borderBottomWidth: 1, 
        marginBottom: 5, marginTop: 25, width: '100%', paddingBottom: 5, height: 20,
        fontSize: 16, color: 'silver'
    },
    signUpPick: { width: '100%', color: 'silver' },
    signUpPickLabel: { fontSize: 16, color: 'silver' },
    signUpPickHeader: {fontSize: 12, color: 'silver', textAlign: 'justify'},
    signUpButton: { marginBottom:90, alignSelf:'center' }
})

export default class SignUpComponent extends React.Component<Props> {
    remountComponent = () => { this.forceUpdate() }
    render() {
        const {navToProfile} = this.props
        return (
            <Mutation mutation={signUpUserMutation}>
                {(signUp, { data, loading, error }) => {
                    if (error) { return (
                        <View style={styles.signUpContainer}>
                            <View><Text style={{fontWeight:'bold'}}>Ha ocurrido un error...</Text></View>
                            <View><Text>{error.message.split(': ')[1]}</Text></View>
                            <View style={{marginTop:25}}><Text onPress={this.remountComponent}>Reintentar</Text></View>
                        </View>
                    )}
                    if (data && data.signUpUser.token) { return <SignUpSuccess navToProfile={navToProfile} /> }
                    return (
                        <Formik 
                            initialValues={{email: '', password: '', name: '', lastname: '', groupRequest: 'PUBLIC'}}
                            validationSchema={userSignUpSchema}
                            onSubmit={async (values) => { await signUp({variables: values}) }}
                        >
                            {({handleSubmit, handleBlur, errors, setFieldValue, values}) => (
                                <View style={styles.signUpContainer}>
                                    <View style={styles.signUpHeader}>
                                        <TouchableOpacity onPress={() => {navToProfile()}}>
                                            <CloseIcon size={32} color="grey" />
                                        </TouchableOpacity>
                                        <View style={{alignItems: 'center', flex:1}}>
                                            <Text style={styles.signUpHeaderTitle}>Nuevo Usuario</Text>
                                        </View>
                                    </View>
                                    <View style={styles.signUpFormContainer}> 
                                        { loading && <ActivityIndicator />}
                                        <Field 
                                            name="email"
                                            type="email"
                                            textContentType="username"
                                            autoCapitalize="none"
                                            placeholder="email"
                                            placeholderTextColor='grey'
                                            spellCheck={false}
                                            component={InputField}
                                            error={errors.email}
                                            onBlur={handleBlur('email')}
                                            style={styles.signUpInputs}
                                        />
                                        <Field 
                                            name="password"
                                            type="password"
                                            autoCapitalize="none"
                                            textContentType="password"
                                            placeholder="contraseña"
                                            placeholderTextColor='grey'
                                            spellCheck={false}
                                            secureTextEntry
                                            component={InputField}
                                            error={errors.password}
                                            onBlur={handleBlur('password')}
                                            style={styles.signUpInputs}
                                        />
                                        <Field 
                                            name="name"
                                            textContentType="username"
                                            placeholder="nombre"
                                            placeholderTextColor='grey'
                                            spellCheck={false}
                                            component={InputField}
                                            error={errors.name}
                                            onBlur={handleBlur('name')}
                                            style={styles.signUpInputs}
                                        />
                                        <Field 
                                            name="lastname"
                                            textContentType="username"
                                            placeholder="apellidos"
                                            placeholderTextColor='grey'
                                            spellCheck={false}
                                            component={InputField}
                                            error={errors.lastname}
                                            onBlur={handleBlur('lastname')}
                                            style={styles.signUpInputs}
                                        />
                                        <Field 
                                            name="groupRequest"
                                            component={SelectField}
                                            items={[
                                                {value:'PUBLIC', label: 'General'}, 
                                                {value:'STAFF', label:'Staff'},
                                                {value: 'STUDENT', label: 'Estudiante'}
                                            ]}
                                            placeholder={{label: 'Seleccione un grupo...', value: 'PUBLIC', color: 'grey' }}
                                            textInputProps={styles.signUpInputs}
                                        />
                                        <View style={{marginTop: 30, marginBottom: 15}}>
                                            <Text style={styles.signUpPickHeader}>Especifique el grupo al que pertenece. Su selección será verificada a partir de su nombre completo y apellidos cotejados con su registro dentro de la organización; posteriormente recibirá un email confirmando su grupo.</Text>
                                        </View>
                                    </View>
                                    <View style={styles.signUpButton}>
                                        <Button onPress={(e:any) => handleSubmit()} title="Registrarse" color={Colors.primary} />
                                    </View>
                                </View>   
                            )}
                        </Formik>
                    )
                }}
            </Mutation>
        )
    } 
}