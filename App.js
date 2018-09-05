import {Navigation} from "react-native-navigation";
import {Provider} from "react-redux";
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

import configureStore from "./src/store/configureStore";
const store = configureStore();

Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
})

// import React from 'react';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import {connect} from "react-redux";
// // import ListItem from "./src/components/ListItem/ListItem";
// import PlaceInput from "./src/components/InputContainer/InputContainer";
// import PlaceList from "./src/components/PlaceList/PlaceList";
// import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
// import placeImage from "./src/assets/lanta.jpg"
// import {addPlace, deletePlace, selectPlace, deselectPlace} from "./src/store/actions/index"

// export class App extends React.Component {
//   // state = {
//   //   placeName: "",
//   //   places: [],
//   //   selectedPlace: null
//   // }
//   placeNameChangedHandler = (val) => {
//     this.setState({
//       placeName: val
//     })
//   }
//   placeAddedHandler = placeName => {
//     console.log("place added");
//     this.props.onAddPlace(placeName)
//   }
//   placeDeletedHandler = () => {
//       this.props.onDeletePlace()
//   }
//   modalClosedHandler = () => {
//     this.props.onDeSelectPlace();
//   }
//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <PlaceDetail 
//           selectedPlace={this.props.selectedPlace}
//           onItemDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalClosedHandler}
//         />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
// });

// const mapStateToProps = (state) => ({
//   places: state.places.places,
//   selectedPlace: state.places.selectedPlace
// });

// const mapDispatchToProps = dispatch => ({
//   onAddPlace: (name) => dispatch(addPlace(name)),
//   onDeletePlace: () => dispatch(deletePlace()),
//   onSelectPlace: (key) => dispatch(selectPlace(key)),
//   onDeSelectPlace: () => dispatch(deselectPlace()),
// });
// export default  connect(mapStateToProps, mapDispatchToProps)(App)