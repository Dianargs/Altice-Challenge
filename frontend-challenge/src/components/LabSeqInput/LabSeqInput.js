import React, { useState } from "react";

import './LabSeqInput.css'

const LabSeqInput = (props) =>{
    const [enteredNumber, setEnteredNumber] = useState('');
    const [errorNegative, setErrorNegative] = useState('');

    const numChangeHandler = (e) => {
        setErrorNegative('');
        setEnteredNumber(e.target.value);
    }
    //dont forget to check if is negative
    const submitHandler = (e) => {
        e.preventDefault(); // prevent from refreshing after submitting
        if(enteredNumber<0){
            setErrorNegative("Don't use negative numbers! Try again!");
        }
        else{
            props.onSaveInput(enteredNumber);
        }
        
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="num-input">
                <label>Insert N: </label>
                <input type='number' onChange={numChangeHandler}/>
            </div>
            <div className="num-input__actions">
                <button type="submit">Calculate 
                </button>
                {errorNegative && <div className="error">{errorNegative}</div>}
            </div>
        </form>
    );
}

export default LabSeqInput;
