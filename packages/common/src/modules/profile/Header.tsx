// @ts-ignore
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const WIDTH = Dimensions.get('screen').width

interface Props {
    codeID?: string
}

const styles = StyleSheet.create({
    container: {
        width: '100%', height: WIDTH, position: 'absolute', top: 0, left: 0,
        justifyContent: 'center', alignItems: 'center'
    }
})

export default class ProfileHeader extends React.Component<Props> {
    render(){
        const { codeID = '123' } = this.props
        return (
            <View style={{...StyleSheet.absoluteFillObject, padding: 5, paddingTop: 50}} >
                <QRCode size={WIDTH*0.80} value={codeID} />
            </View>
        )
    }
}