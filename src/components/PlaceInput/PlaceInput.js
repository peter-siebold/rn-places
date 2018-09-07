import React from "react";
import {StyleSheet, View, TextInput, Button} from "react-native";
import DefaultInput from "../UI/DefaultInput/DefaultInput";
class PlaceInput extends React.Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };


  render() {
    return (
        <DefaultInput 
          placeholder="Place name" 
          value={this.state.placeName} 
          onChangeText={this.placeNameChangedHandler} />
    );
  }
}

export default PlaceInput;