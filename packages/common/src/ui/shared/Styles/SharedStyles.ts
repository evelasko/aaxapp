import { StyleSheet } from 'react-native';

export const Colors = {
    primary: '#EB894A',
    primaryDark: '#C77139',
    medium: '#999999',
    dark: '#363636'
}

export const Headers = StyleSheet.create({
    h1Light: {
        color: "white", fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1
    },
    h1Color: {
        color: Colors.primary, fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1
    },
    h1Dark: {
        color: Colors.dark, fontWeight: '900', fontSize: 22, textTransform: 'uppercase', letterSpacing: 1
    }
})