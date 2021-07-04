import React from 'react'
import Input from 'src/components/Inputs/Input.jsx';
import Row from 'src/components/Row/Row';
let stateOfBtn ;
 export const getStateOfBtn = (state) =>{
   stateOfBtn= state;
   
}
const Box = () => {
    // const [option,setOption] = useState('');
    return (
        <div className="Box">
            <Row elem_1= {<span className="Radio"></span>}
                 elem_2= {<p className="Para">Start with a basic shaped room, enter dimensions below</p>}
                />
            <Row elem_1= { <Input name="Length" length="mtr" type={stateOfBtn} />}
                 elem_2= {<Input name="Depth" length="mtr" type={stateOfBtn}/>}
                 />
            
        </div>
    )
}

export default Box ;
