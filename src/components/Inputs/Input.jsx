import React from 'react'

const ExtraInput = () =>{
    return (
        <>
        <label htmlFor="" className="Input-Container__Label">
                       ft
                    </label>
        <input type="text" name="input"className="Input-Container__Input"/>
        </>
    )
}
const Input = (props) => {
   
    return (
        <div className="Input-Container">
             <label htmlFor="input" className="Input-Container__Label">
                   {props.name}
                   
                    </label>
                    <input type="text" name="input"className="Input-Container__Input"/>
                    {
                        props.type === 'Inches'? ExtraInput: null
                    }
                    <label htmlFor="" className="Input-Container__Label">
                        {props.length}
                    </label>
        </div>
    )
}

export default Input
