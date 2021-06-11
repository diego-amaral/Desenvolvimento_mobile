import React from "react";
import { Text, SafeAreaView, StyleSheet, TextInput, Alert ,Image} from 'react-native';
import { Button } from "react-native-elements";

export default function Cadastro(props) {


    const Telalogin = () => {
        props.navigation.navigate("Login")
    }

    const [nome, onChangeNome] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);


    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.texto1}>Cadastro de Usuário </Text>
            <Image
                style={styles.atleta1}
                source={{
                    uri: 'https://i.postimg.cc/nLGypmM1/Atleta.png',
                }}
            />
            <Image
                style={styles.atleta2}
                source={{
                    uri: 'https://i.postimg.cc/nLGypmM1/Atleta.png',
                }}
            />

            <Text style={styles.texto2}>{"\n"}{"\n"}Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNome}
                value={nome}
                placeholder="nome"
            />
            <Text style={styles.texto2}> Usuario</Text>
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
                buttonStyle={styles.button1}
                title="Cadastrar"
                onPress={() => Alert.alert(' Cadastrado com sucesso!! ', Telalogin())}
            />

            <Button
                buttonStyle={styles.button2}
                title="Cancelar"
                onPress={() => Alert.alert(' Você cancelou o cadastro ', Telalogin())}
            />

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

    texto1: {
        color: 'black',
        fontSize: 20,
        fontStyle:'italic',
    },
    texto2: {
        color: 'black',
        fontSize: 15,

    },
    button1: {
        backgroundColor: 'black',
        width: 150,
        marginTop:30,
        margin: 10,
        borderRadius: 7,
    },
    button2: {
        backgroundColor: 'black',
        width: 150,
        borderRadius: 7,
    },
    atleta1: {
        width: 50,
        height: 50,
        marginTop: -50,
        marginLeft:290,
        borderRadius: 5,
    },
    atleta2: {
        width: 50,
        height: 50,
        marginTop: -50,
        marginRight:290,
        borderRadius: 5,
    },

});