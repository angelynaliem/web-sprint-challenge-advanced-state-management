import React from "react";

import Smurf from "./Smurf";

const Smurfs = props => {

    // console.log("smurfs array ", props.smurf)

return (
     <div>
         {props.smurfs.map(item => (
             <Smurf smurf={item} getSmurf={props.getSmurf} addSmurf={props.addSmurf}/>
         ))}
        </div>
)


}

export default Smurfs;