import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

export default function Segunda() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Segunda Tela do Aplicativo</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});