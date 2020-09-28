import React, { useEffect, useState } from "react";

import { getSmurf, addSmurf } from "../actions";

import { connect } from "react-redux";

const Form = (props) => {

    const startingForm = {
        name: "",
        age: "",
        height: ""
    }

    const [newSmurf, setNewSmurf] = useState(startingForm);

    const handleInputChange = e => {
        e.persist();
        setNewSmurf({ 
            ...newSmurf,
            [e.target.name] : e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        console.log("form submitted")
        props.addSmurf(newSmurf)
        props.getSmurf()
        setNewSmurf(startingForm)
    }
   
        return (
            <div>
                <form onSubmit={submitForm}>
                    <input htmlFor="name"
                    id = "name"
                    name = "name"
                    type = "text"
                    placeholder = "Name"
                    value = {newSmurf.name}
                    onChange = {handleInputChange}
                    />

                    <input htmlFor="age"
                    id = "age"
                    name = "age"
                    type = "number"
                    placeholder = "Age"
                    value = {newSmurf.age}
                    onChange = {handleInputChange}
                    /> 

                    <input htmlFor="height"
                    id = "height"
                    name = "height"
                    type = "text"
                    placeholder = "Height"
                    value = {newSmurf.height}
                    onChange = {handleInputChange}
                    />

                    <button type="submit">Add new smurf to the village</button>
                </form>
            </div>
        )
}


const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

const mapDispatchToProps = { getSmurf, addSmurf }

export default connect(mapStateToProps, mapDispatchToProps)(Form);