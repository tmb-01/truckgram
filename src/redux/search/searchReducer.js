import {
    DATE,
    DIRECTION_FROM,
    DIRECTION_TO,
    PRICE_FROM,
    PRICE_TO,
    TYPE_OF_TRUCK,
    VOLUME,
    WEIGHT
} from "./searchActionTypes";

const initialState = {
    // typeOfTruck: '',
    // directionFrom: '',
    // directionTo: '',
    // priceFrom: '',
    // priceTo: '',
    // date: '',
    // weight: '',
    // volume: '',
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_OF_TRUCK:
            return {
                    ...state,
                    typeOfTruck: action.payload
            }
        case DIRECTION_FROM:
            return {
                ...state,
                directionFrom: action.payload
            }
        case DIRECTION_TO:
            return {
                ...state,
                directionTo: action.payload
            }
        case PRICE_FROM:
            return {
                ...state,
                priceFrom: action.payload
            }
        case PRICE_TO:
            return {
                ...state,
                priceTo: action.payload
            }
        case DATE:
            return {
                ...state,
                date: action.payload
            }
        case WEIGHT:
            return {
                ...state,
                weight: action.payload
            }
        case VOLUME:
            return {
                ...state,
                volume: action.payload
            }
        default :
            return {
                state
            }
    }
}

export default searchReducer;