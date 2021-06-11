import React from 'react'
import { Text, SafeAreaView, StyleSheet, TextInput, Image } from 'react-native'
import { Button } from "react-native-elements";

export default function Login(props) {

    const Cadastro = () => {
        props.navigation.navigate("Cadastro")
    }
    const Telainicial = () => {
        props.navigation.navigate("Telainicial")
    }
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);



    return (
        <SafeAreaView style={styles.container}>





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
                placeholder="  email"

            />
            <Text style={styles.texto2}>Senha</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="  Senha"
                secureTextEntry={true}

            />
            <Button
                buttonStyle={styles.button}
                title="Login"
                justifyContent='center'
                onPress={Telainicial}
            />

            <Text style={{ color: 'black' }}
                onPress={() => Cadastro()}>
                {"\n"} Ainda não é inscrito?<Text style={{ color: 'blue' }}>Cadastre-se!</Text>
            </Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'silver',
        fontSize: 30,
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
        height: 400,
        marginTop: -30,
        borderRadius: 10,
    },
    texto1: {
        color: 'black',
        fontSize: 20,
    },
    texto2: {
        color: 'black',
        fontSize: 15,

    },
    button: {
        backgroundColor: 'black',
        width: 150,
        borderRadius: 7,
    },

});