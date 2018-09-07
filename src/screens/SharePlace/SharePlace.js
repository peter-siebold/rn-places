import React, {Component} from "react";
import {View, Text, TextInput, Button, StyleSheet, ScrollView, Image} from "react-native"
import {connect} from "react-redux";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import imagePlaceHolder from "../../assets/lanta.jpg"
import {addPlace} from "../../store/actions/index"

class SharePlaceScreen extends Component {
    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    onNavigatorEvent = (event) => {
        if(event.type === "NavBarButtonPress"){
            if(event.id === "sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side: "left"
                });   
            }
        }
    }
    placeAddedHandler = placeName => this.props.onAddPlace(placeName);

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText>
                    <View style={styles.placeholder}>
                        <Image source={imagePlaceHolder} style={styles.previewImage}/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => alert(1)} title="Pick Image"/>
                    </View>
                    <View style={styles.placeholder}>
                        <Text>
                            Map
                        </Text>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => alert(1)} title="Set Location"/>
                    </View>
                    <PlaceInput />
                    <View style={styles.button}>
                        <Button title="Share the place" onPress={this.placeAddedHandler} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
       flex: 1,
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
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
})
const mapDispatchToProps = dispatch => ({
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
});
export default connect(null, mapDispatchToProps)(SharePlaceScreen);