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

// const TYPE_OF_TRUCK = 'TYPE_OF_TRUCK';
// const DIRECTION_FROM = 'DIRECTION_FROM';
// const DIRECTION_TO = 'DIRECTION_TO';
// const PRICE_FROM = 'PRICE_FROM';
// const PRICE_TO = 'PRICE_TO';
// const DATE = 'DATE';
// const WEIGHT = 'WEIGHT';
// const VOLUME = 'VOLUME';

export const typeOfTruck = (payload) => {
    return {
        type: TYPE_OF_TRUCK,
        payload: payload
    }
}
export const directionFrom = (payload) => {
    return {
        type: DIRECTION_FROM,
        payload: payload
    }
}
export const directionTo = (payload) => {
    return {
        type: DIRECTION_TO,
        payload: payload
    }
}
export const priceFrom = (payload) => {
    return {
        type: PRICE_FROM,
        payload: payload
    }
}
export const priceTo = (payload) => {
    return {
        type: PRICE_TO,
        payload: payload
    }
}
export const date = (payload) => {
    return {
        type: DATE,
        payload: payload
    }
}
export const weight = (payload) => {
    return {
        type: WEIGHT,
        payload: payload
    }
}
export const volume = (payload) => {
    return {
        type: VOLUME,
        payload: payload
    }
}
