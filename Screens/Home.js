import React from 'react'
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native'

export default function Home(props) {

    const segundaTela = () => {
        props.navigation.navigate("Segunda")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Primeira Página</Text>
            <Button
                title="Ir para segunda Tela"
                onPress={segundaTela}
            />
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