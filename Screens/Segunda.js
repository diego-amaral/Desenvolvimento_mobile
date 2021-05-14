import React from 'react'
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native'

export default function Segunda(props){

    const TerceiraTela = () => {
        props.navigation.navigate("Terceira")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text>Segunda Tela do Aplicativo</Text>
            <Button 
                title="Ir para Terceira Tela"
                onPress={TerceiraTela}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dddddd',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });