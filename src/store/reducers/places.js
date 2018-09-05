import {ADD_PLACE, DELETE_PLACE} from "../actions/actionTypes"

const initialState = {
    places: []
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({ 
                    key: `${Math.random()}`, 
                    name: action.placeName,
                    image: {
                      uri: "https://d3cyqke9e4s5d1.cloudfront.net/wp-content/uploads/2016/11/boat-to-paradise-at-trang-ko-samui-thailand-istock_000056895456_medium-2.jpg"
                    }
                  })
            };
        break;
        case DELETE_PLACE:
            // TODO 
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== action.placeKey;
                  }),
                selectedPlace: null
            };
        break;
        default:
            return state;
        break;
    }
}

export default reducer;