import React from "react";
import {StyleSheet, FlatList} from "react-native";
import ListItem from "../ListItem/ListItem";
const listView = props => {
    const placesOutput = props.places.map( (place, index) => (
        <ListItem key={index} placeName={place} onItemPressed={() => props.onItemSelected(index)} />
      ));
    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem 
                    placeName={info.item.name} 
                    placeImg={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)} />
            )}
        />
            
    )
};
const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
      }
});
export default listView;