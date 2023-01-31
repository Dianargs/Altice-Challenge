import React from "react";

import './LabSeqOutput.css'

const LabSeqOutput = (props) =>{
    return(
        <div className="num-output">
            <h2>Result for N={props.numb}:</h2>
            <p>{props.data}</p>
        </div>
    )
}

export default LabSeqOutput;
