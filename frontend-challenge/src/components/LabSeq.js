import React,{useState} from "react";

import LabSeqInput from "./LabSeqInput/LabSeqInput";
import LabSeqOutput from "./LabSeqOutput/LabSeqOutput";

import Card from './UI/Card';

const LabSeq = () =>{
    const [result, setResult] = useState('');
    const [n, setN]= useState('x');
    

    let saveInputHandler = async (enteredInput) =>{

        setN(enteredInput);
        let res = await fetch("http://localhost:8080/labseq/"+enteredInput, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let r = await res.json();
        setResult(r.result);

    }

    return(
        <Card>
            <LabSeqInput onSaveInput={saveInputHandler}/>
            <LabSeqOutput data={result} numb={n}/>
        </Card>
    );
}

export default LabSeq;