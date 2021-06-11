import React from "react";
import { Text, SafeAreaView, StyleSheet, TextInput, Image, Alert } from 'react-native';
import { Button } from "react-native-elements";

export default function Telaatividades(props) {


    const Telainicial = () => {
        props.navigation.navigate("Telainicial")
    }

    const [data, onChangeData] = React.useState(null);


    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.texto1}>Atividades do dia </Text>
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
            <Text style={styles.texto2}>Data</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeData}
                value={data}
                placeholder="  Data"

            />
            <Button
                buttonStyle={styles.button1}
                title="Verificar"
                onPress={() => Alert.alert(' Atividade não encontrada!! ', Telainicial())}
            />

            <Text style={styles.texto2}>{"\n"}{"\n"}Atividades Registradas</Text>
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Suas atividades aparecerão aqui"
                placeholderTextColor="grey"
                numberOfLines={5}
                multiline={true}
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
        fontStyle: 'italic',
    },
    texto2: {
        marginTop: 50,
        color: 'black',
        fontSize: 15,

    },
    button1: {
        backgroundColor: 'black',
        width: 150,
        marginTop: 30,
        margin: 10,
        borderRadius: 7,
    },

    atleta1: {
        width: 50,
        height: 50,
        marginTop: -50,
        marginLeft: 250,
        borderRadius: 5,
    },
    atleta2: {
        width: 50,
        height: 50,
        marginTop: -50,
        marginRight: 250,
        borderRadius: 5,
    },
    textArea: {
        fontSize:25,
        textAlign:'center',
    },

});