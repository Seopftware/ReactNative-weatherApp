import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo";
import {Ionicons} from "@expo/vector-icons";

export default class App extends Component{
    render() {
        return(
            <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
                <View style={styles.upper}>
                    <Ionicons color="white" size={144} name="ios-rainy"/>
                    <Text style={styles.temp}>Temp here!</Text>
                </View>

                <View style={styles.lower}>
                    <Text style={styles.title}>Rainy</Text>
                    <Text style={styles.subtitle}>For more info look outside</Text>
                </View>
            </LinearGradient>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft: 24,
        marginBottom: 100
    },
    temp:{
        fontSize: 48,
        color: "white",
        marginTop: 10
    },
    title:{
        fontSize:38,
        color: "white",
        marginBottom: 10,
        fontWeight:"300"
    },
    subtitle:{
        fontSize:22,
        color: "white",
        marginBottom: 24
    }
});
