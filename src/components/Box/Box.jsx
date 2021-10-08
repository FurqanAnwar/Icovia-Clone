import React from 'react'
import Input from 'src/components/Inputs/Input.jsx';
import Row from 'src/components/Row/Row';
import { useSelector } from 'react-redux';
let stateOfBtn ;
 export const getStateOfBtn = (state) =>{
   stateOfBtn= state;
   
}
const Box = () => {

    const Title = useSelector(state => state.HeaderTitle);
    
    return (
        <div className="Box">
            <Row elem_1= {<span className="Radio"></span>}
                 elem_2= {<p className="Para">Start with a basic shaped room, enter dimensions below</p>}
                />
            <div className="Box__Row" >{
            Title && Title === "Inches" ?
            
            <Row elem_1={<Input name="Length" Type="Inches" length="in" />}
                 elem_2={<Input name="Depth" Type="Inches" length="in" />} />
                    :
            <Row elem_1={<Input name="Length" length="mtr" />}
                 elem_2={<Input name="Depth" length="mtr" />} />
          
            }
            </div>
            
        </div>
    )
}

export default Box ;
