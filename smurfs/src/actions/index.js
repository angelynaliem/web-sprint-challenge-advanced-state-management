import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";
export const SMURF_PROCESSING = "SMURF_PROCESSING";
export const SMURF_FETCHED = "SMURF_FETCHED";
export const SMURF_FAIL = "SMURF_FAIL";


export const addSmurf = (newSmurf) => (dispatch) => {

    console.log("add smurf action creator", dispatch);

    dispatch({ type: ADD_SMURF })

    axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then((res) => {
        console.log("posting new smurf", res.data)
        dispatch({
            type: ADD_SMURF,
            payload: res.data,
        })
    })
        .catch((err) => {
            console.log("posting failed", err)
            dispatch({
                type: SMURF_FAIL,
                payload: err
            })
        })
};

export const getSmurf = () => (dispatch) => {

    console.log("getSmurf async action creator", dispatch)

    dispatch({ type: SMURF_PROCESSING })

    axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
        // console.log("API response: ", res.data)
        dispatch({
            type: SMURF_FETCHED,
            payload: res.data
        })
    })
    .catch((err) => {
        dispatch({
            type: SMURF_FAIL,
            payload: err
        })
        console.log(err)
    })

}