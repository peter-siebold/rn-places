import React from "react";
import {StyleSheet, View, Text, TouchableWithoutFeedback, Image} from "react-native";

const listItem = (props) => (
    <TouchableWithoutFeedback  onPress={props.onItemPressed}>
        <View style={styles.listItem} >
        <Image source={props.placeImg}  style={ styles.placeImg } />
        <Text >{ props.placeName }</Text>
        </View>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    placeImg : {
        marginRight: 8,
        height: 30,
        width: 30
    }
})

export default listItem;