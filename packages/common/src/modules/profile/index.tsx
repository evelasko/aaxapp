// @ts-ignore
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const WIDTH = Dimensions.get('window').width

const Profile: React.FC = () => {
    return (
        <View style={{...StyleSheet.absoluteFillObject, padding:10}}>
            <View style={{marginTop: 200, marginBottom: 100}}>
                <Text>Profile...</Text>
            </View>
            <View>
                <QRCode value="http://awesome.link.qr" size={WIDTH-25} />
            </View>
        </View>
    )
}

export default Profile