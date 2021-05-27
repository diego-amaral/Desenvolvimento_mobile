import React from 'react'
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native'

export default function Home(props) {

    const segundaTela = () => {
        props.navigation.navigate("Segunda")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Tela Home</Text>
            <Button
                title="Clique aqui para ver os videos"
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