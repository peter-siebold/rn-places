import React, {Component} from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class PickLocation extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Text>
                        Map
                    </Text>
                </View>
                <View style={styles.button}>
                    <Button onPress={() => alert(1)} title="Set Location"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    }
})
export default PickLocation;