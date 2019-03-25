import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileView from './components/ProfileView';

const Profile: React.FC = () => {
    return (
        <View style={StyleSheet.absoluteFill}>
            <ProfileView logOutUser={() => {return {}}} userQRID='34edhwelfhwoechwjlb' />
        </View>
    )
}

export default Profile