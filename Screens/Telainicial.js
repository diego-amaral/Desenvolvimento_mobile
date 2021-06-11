import React from "react";
import { Text, SafeAreaView, StyleSheet, TextInput,  Image } from 'react-native';
import { Button } from "react-native-elements";

export default function Telainicial(props) {


  const Telaregistro = () => {
    props.navigation.navigate("Telaregistro")
  }

  

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.texto1}>Tela inicial </Text>
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

      <Text style={styles.texto2}>{"\n"}{"\n"}Dia do mês</Text>
      <TextInput
        style={styles.textArea}
        underlineColorAndroid="transparent"
        placeholder="16 de junho"
        placeholderTextColor="grey"
        numberOfLines={5}
        multiline={true}
      />
      <Text style={styles.texto2}> Dia da Semana</Text>
      <TextInput
        style={styles.textArea}
        underlineColorAndroid="transparent"
        placeholder="Segunda-feira"
        placeholderTextColor="grey"
        numberOfLines={5}
        multiline={true}
      />

      <Button
        buttonStyle={styles.button1}
        title="Registrar"
        onPress={Telaregistro}
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
    marginLeft: 200,
    borderRadius: 5,
  },
  atleta2: {
    width: 50,
    height: 50,
    marginTop: -50,
    marginRight: 200,
    borderRadius: 5,
  },

});