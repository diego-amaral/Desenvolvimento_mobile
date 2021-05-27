import React, { useState, useCallback, useRef } from "react";
import { Text, SafeAreaView, StyleSheet, Button, View, Alert } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";

export default function Segunda(props) {

    const visualizarMapa = () => {
        props.navigation.navigate("Terceira")
    }
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text>Video 1</Text>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={"zDodZ2Oc4XA"}
                    onChangeState={onStateChange}
                />
                
                <Text>Video 2</Text>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={"oPIgMoTTQsQ"}
                    onChangeState={onStateChange}
                />
                
                <Button
                    title="Visualisar o mapa"
                    onPress={visualizarMapa}
                />
            </View>


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