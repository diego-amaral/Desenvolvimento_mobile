import React from "react";
import { Text, SafeAreaView, StyleSheet, TextInput, Image ,Alert} from 'react-native';
import { Button } from "react-native-elements";



export default function Telaregistro(props) {

    const Telaatividades = () => {
        props.navigation.navigate("Telaatividades")
    }

    const [atividade, onChangeAtividade] = React.useState(null);
    const [tempo, onChangeTempo] = React.useState(null);
    const [data, onChangeData] = React.useState(null);




    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.texto1}>Registro de Atividades </Text>
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

            <Text style={styles.texto2}>{"\n"}{"\n"}Atividade</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeAtividade}
                value={atividade}
                placeholder="  atividade"
            />
            <Text style={styles.texto2}> Tempo</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeTempo}
                value={tempo}
                placeholder="  tempo"

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
                title="Registrar atividade"
                onPress={() => Alert.alert(' Atividade registrada com sucesso!! ', Telaatividades())}
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
        marginLeft: 310,
        borderRadius: 5,
    },
    atleta2: {
        width: 50,
        height: 50,
        marginTop: -50,
        marginRight: 310,
        borderRadius: 5,
    },

});