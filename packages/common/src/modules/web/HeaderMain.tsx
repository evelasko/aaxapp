import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GoBackIcon from '../../ui/icons/goback/gobackIcon';
import LogInIcon from '../../ui/icons/login/LogInIcon';
import UserIcon from '../../ui/icons/user/index.web';

interface Props {
    goBack?: () => void
    goLogin?: () => void
    goProfile?: () => void
    goMenu?: () => void
    title?: string
}

const styles = StyleSheet.create({
    headerContainer: {width: '100%', height: 100, justifyContent:'space-around'},
    headerButtonsRight: {paddingRight: 20},
    headerButtonsLeft: {paddingLeft: 20, flex:2},
    headerTitle: {alignItems:'center', flex: 1},
    headerTitleText: { fontWeight: 'bold', fontSize: 16, color:'#2E2E2E'}
})

const HeaderMain: React.FC<Props> = ({goBack, goProfile, goLogin, title, goMenu}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerButtonsLeft}>
                {goBack && <TouchableOpacity onPress={() => {goBack()}}><GoBackIcon size={48} color={'grey'} /></TouchableOpacity> }
            </View>
            <View style={styles.headerTitle}>
                <Text style={styles.headerTitleText}>{title ? title : 'aaXapp'}</Text>
            </View>
            <View style={styles.headerButtonsRight}>
                {goLogin && <TouchableOpacity onPress={() => {goLogin()}}><LogInIcon size={32} color={'grey'} /></TouchableOpacity>}
                {goProfile && <TouchableOpacity onPress={() => goProfile()}><UserIcon size={48} color={'grey'} /></TouchableOpacity>}
            </View>
        </View>
    )
}

export default HeaderMain