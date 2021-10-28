
import React,{useState,useRef} from 'react';
import Button from 'src/components/Button/Button';

import {useSelector,useDispatch} from 'react-redux';
import BtnTitle from 'src/actions/BtnTitle';
import HeaderBtnTitle from 'src/actions/HeaderBtnTitle';
import ShowDropDown from 'src/actions/Dropdown';

import OptionsContainerBtn from 'src/actions/OptionsContainerBtn';


const ComplexBtn = (props) =>{
    // console.log(props);
    const depend = props.belongsTo ? props.belongsTo : null;
    const Title = useSelector(state => state.Title);
    const OptionsContainerBtnTitle = useSelector(state => state.OptionsContainerBtn);
   
    const DropDown = useSelector( state => state.Dropdown);
    const dispatch = useDispatch();

const [showBlock,setShowBlock] = useState(false);
const [title, setTitle]        = useState(null);

    const handleClick = (event) => {
        
        
        setShowBlock(() => !DropDown);

        dispatch(ShowDropDown(!DropDown))
     
        let valTitle = event.target.innerText;
        

        // handling the click event for header btn
        // Add another check for matching the text
        if (props.belongsTo  && props.belongsTo === 'Header' && valTitle) {
            dispatch(HeaderBtnTitle(valTitle))
            
        }
        if (props.belongsTo && props.belongsTo === 'OptionsContainer' && valTitle) {
            
            dispatch(OptionsContainerBtn(valTitle));

        }
        // Handling click event for button other than header btn
    //     if (valTitle) {
           
    //         dispatch(BtnTitle(valTitle));
    //             // setTitle(valTitle);
    //    }
        setTitle(valTitle);
    }

  
  
       
        return (
            <Button  handleClick={handleClick} handleTitle={props.handleTitle? props.handleTitle : title} title={props.title} type="complex-btn" class={props.class}>
             
                {/* <DropDownBox class={props.btnCol } length={props.length}state={showBlock} title={props.titles}/> */}
            </Button>
       )
    
}

export default ComplexBtn;