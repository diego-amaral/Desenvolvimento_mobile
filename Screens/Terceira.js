import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView, View, Text, StyleSheet, Dimensions} from 'react-native'

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
                    return <Marker key={key} 
                            coordinate= {val.coordinate}
                            title={val.location}
                            description={val.dataTime}
                            />
                    })

      return (
        <View style={styles.container}>
          <MapView style={styles.map} 
            initialRegion={{
              latitude: -8.093833,
              longitude: -34.96750,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
          {conteudo}
          </MapView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});