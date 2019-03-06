import QRCode from 'qrcode';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
// @ts-ignore
// import QRCode from 'react-native-qrcode-svg';

const WIDTH = Dimensions.get('window').width

class Profile extends React.Component  {
    render() {
        QRCode.toDataURL('some text', { errorCorrectionLevel: 'H' }, function (err, url) {
            if (err) console.log('ERROR', err)
            console.log(url)
          })
        return (
            <View style={{...StyleSheet.absoluteFillObject, padding:10}}>
                <View style={{marginTop: 200, marginBottom: 100}}>
                    <Text>Profile...</Text>
                </View>
                <View>
                   
                </View>
            </View>
        )
    }
}

export default Profile
// <QRCode value="http://awesome.link.qr" size={WIDTH-25} />