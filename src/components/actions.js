export const ADD_FEATURES = 'ADD_FEATURES';
export const REMOVE_FEATURES = 'REMOVE_FEATURES';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';


export const addFeatures = newFeatures => {
    console.log("action new feature", newFeatures)
    return {
        type: ADD_FEATURES,
        payload: newFeatures
    }
};
export const removeFeatures = (removeFeatures) => {
    return {
        type: REMOVE_FEATURES,
        payload: removeFeatures
    }

}
export const updateTotal = totalPrice => {
    return {
        type: UPDATE_TOTAL,
        payload: totalPrice
    }
}

