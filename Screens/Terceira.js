import React from 'react'
import { SafeAreaView, View, Text, StyleSheet} from 'react-native'

export default class Terceira extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            isLoading: true,
            dataSource: null
        }
    }

    componentDidMount(){
        return fetch('https://healthdrones.tech/viewDroneMonitoring/index.json', {
              method: 'GET'
            })
              .then((response) => { 
                 console.log(JSON.stringify(response, null, 4))
                  return response.json() 
                })
              .then(data => {
                  console.log(data)
                this.setState({
                  isLoading: false,
                  dataSource: data.content 
                })
              })
              .catch((error)=> {
                console.log(error)
              })
    }

    render(){
        if(this.state.isLoading){
            return (
              <SafeAreaView style={styles.container}>
                <Text>... Carregando ... </Text>
              </SafeAreaView>
            )
          }else{
                let conteudo = this.state.dataSource.map((val, key) => {
                    return <View key={key} style={{flex:1, margin:5, justifyContent: 'center', alignItems: 'center'}}>
                              <Text>Nome: {val.name} - data: {val.dataTime}</Text>
                            </View>
                    })
              return (
                <SafeAreaView style={styles.container}>
                  {conteudo}
                </SafeAreaView>
              )
          }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cdcdcd',
        alignItems: 'center',
        justifyContent: 'center',
    },
});