import React, { useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";
import { 
  getSmurf, 
  // addSmurf 
} from "../actions";

import Smurfs from "./Smurfs";


const App = (props) => {

  // console.log("app props ", props.smurfs)

  // useEffect(() => {

  //   props.getSmurf();

  // }, [props.getSmurf])

  if (props.isProcessing) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <button onClick={() => props.getSmurf(props.smurfs)}>Get smurfs list</button>
       <Smurfs smurfs={props.smurfs} getSmurf={props.getSmurf}/>
    </div>
  );

}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isProcessing: state.isProcessing,
    error: state.error

  }
};

const mapDispatchToProps = { 
  // addSmurf, 
  getSmurf };
  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
