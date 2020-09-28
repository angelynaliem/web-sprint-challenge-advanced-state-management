// import * as actions from "../actions";

import { bindActionCreators } from "redux"

const initialState = {

    smurfs: [
        { name: "", age: 0, height: "", id: 0 }
    ],

    isFetching: false,
    error: ""

}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SMURF_FETCHING:

        console.log("fetching smurf")

        return {
            ...state,
            isFetching: true
        }

        case SMURF_FETCHED:

        console.log("fetched smurf")

        return {
            ...state,
            smurfs: [
                ...state.smurfs, action.payload
            ],
            isFetching: false
            }

        case SMURF_FAIL:

        console.log("failed to fetch or post smurf")

        return {
            ...state,
            isFetching: false,
            error: action.payload
        }

        case ADD_SMURF:

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