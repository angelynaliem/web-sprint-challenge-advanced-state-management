import React from "react";

import Smurf from "./Smurf";

const Smurfs = props => {

    // console.log("smurfs array ", props.smurf)

return (
     <div>
         {props.smurfs.map(item => (
             <Smurf key={item.id} smurf={item} getSmurf={props.getSmurf}/>
         ))}
        </div>
)


}

export default Smurfs;