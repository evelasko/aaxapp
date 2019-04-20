import React from "react";
import { StyleSheet, View } from 'react-native';
import Logo from '../../ui/icons/logo/index';

const WebEntry:React.FC = () => {
        return (
                <View style={[StyleSheet.absoluteFillObject, {justifyContent: "center", alignItems: "center", backgroundColor: "#222222"}]}>
                        <Logo width={400} height={400} />
                </View>
    )
}

export default WebEntry

