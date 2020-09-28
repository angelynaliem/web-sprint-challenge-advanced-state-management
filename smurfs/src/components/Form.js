import React from "react";

// import { connect } from "react-redux";

class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            newSmurf: {
                newName: "",
                newAge: "",
                newHeight: "",
                }
    }
}

    handleInputChange = e => {
        e.persist();
        this.setState({ 
            ...this.state,
            [e.target.name] : e.target.value
        })
    }

    submitForm = e => {
        e.preventDefault();
        console.log("form submitted")
        this.props.addNewSmurf(e, this.state.newSmurf)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input htmlFor="name"
                    id = "name"
                    name = "name"
                    type = "text"
                    placeholder = "Name"
                    value = {this.state.newSmurf.newName}
                    onChange = {this.handleInputChange}
                    />

                    <input htmlFor="age"
                    id = "age"
                    name = "age"
                    type = "number"
                    placeholder = "Age"
                    value = {this.state.newSmurf.newAge}
                    onChange = {this.handleInputChange}
                    /> 

                    <input htmlFor="height"
                    id = "height"
                    name = "height"
                    type = "text"
                    placeholder = "Height"
                    value = {this.state.newSmurf.newHeight}
                    onChange = {this.handleInputChange}
                    />



                    <button>Add new smurf to the village</button>
                </form>
            </div>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {

//     }
// }


export default Form;