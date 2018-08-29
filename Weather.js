import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo";
import {Ionicons} from "@expo/vector-icons";
import ProTypes from "prop-types";

// export default class App extends Component{
//     render() {
//         return(
//             {/*<LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>*/}
//                 {/*<View style={styles.upper}>*/}
//                     {/*<Ionicons color="white" size={144} name="ios-rainy"/>*/}
//                     {/*<Text style={styles.temp}>Temp here!</Text>*/}
//                 {/*</View>*/}
//
//                 {/*<View style={styles.lower}>*/}
//                     {/*<Text style={styles.title}>Rainy</Text>*/}
//                     {/*<Text style={styles.subtitle}>For more info look outside</Text>*/}
//                 {/*</View>*/}
//             {/*</LinearGradient>*/}
//         );
//     }
// }

const WeatherCases ={
    Rain: {
        colors:["#00C6FB", "#005BEA"],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: "ios-rainy"
    },
    Clear: {
        colors:["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "Go and Walk ",
        icon: "ios-sunny"
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm",
        subtitle: "Stay in the house",
        icon: "ios-thunderstorm"
    },
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "it's weather to read a book",
        icon: "ios-cloudy"
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "Do you want to build a snowman?",
        icon: "ios-snow"
    },
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "It's like a rain",
        icon: "ios-rainy-outline"
    },
    Haze: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "It's like a cloudy",
        icon: "ios-rainy-outline"
    }
}

Weather.propTypes = {
    temp:ProTypes.number.isRequired,
    weatherName: ProTypes.string.isRequired

}

function Weather({temp, weatherName}) {
    console.log(weatherName)
    return(
        <LinearGradient colors={WeatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={WeatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}℃</Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title}>{WeatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{WeatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

export default Weather;


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
