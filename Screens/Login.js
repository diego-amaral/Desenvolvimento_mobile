import React from 'react'
import { Text, SafeAreaView, StyleSheet, Button, TextInput, Image } from 'react-native'

export default function Login(props) {

    const segundaTela = () => {
        props.navigation.navigate("Segunda")
    }
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);



    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.texto1}>Tela Login </Text>


            
            <Image
                style={styles.logo}
                source={{
                    uri: 'https://i.postimg.cc/XNwm9jbP/Logo-da-fabrica.png',
                }}
            />


            <Text style={styles.texto2}> {"\n"}Usuario</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="email"

            />
            <Text style={styles.texto2}>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Senha"
                secureTextEntry={true}

            />
            <Button
                title="Login"
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
        backgroundColor: 'black',
        fontSize:30,
    },
    input: {
        height: 40,
        width: 340,
        margin: 12,
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    logo: {
        width: 360,
        height: 250,
    },
    texto1:{
        color:'white',
        fontSize:20,
    },
    texto2:{
        color:'white',
        fontSize:15,
    },
    
});