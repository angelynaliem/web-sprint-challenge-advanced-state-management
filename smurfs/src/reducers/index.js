import * as actions from "../actions";

const initialState = {

    smurfs: [],
    isProcessing: false,
    error: "",

}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.SMURF_PROCESSING:

        console.log("processing smurf")

        return {
            ...state,
            isProcessing: true
        }

        case actions.SMURF_FETCHED:

        console.log("fetched smurf")

        return {
            ...state,
            smurfs:
                // ...state.smurfs, 
                action.payload,
            isProcessing: false
            }

        case actions.SMURF_FAIL:

        console.log("failed to fetch or post smurf")

        return {
            ...state,
            isProcessing: false,
            error: action.payload
        }

        case actions.ADD_SMURF:

        console.log("adding smurf")

        return {
            ...state,
            smurfs: [
                ...state.smurfs, action.payload
            ],
           
        }

        default:
            return state;


    }

}