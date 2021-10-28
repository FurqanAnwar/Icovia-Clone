
import React,{useState,useRef} from 'react';
import DropDownBox from 'src/components/DropDownBox/DropDownBox';
import ComplexBtn from 'src/components/Button/ComplexButton';
import {useSelector,useDispatch} from 'react-redux';
import OptionsContainerBtn from 'src/actions/OptionsContainerBtn';
import ShowDropDown from 'src/actions/Dropdown';
import HeaderBtnTitle from 'src/actions/HeaderBtnTitle';
import BtnTitle from 'src/actions/BtnTitle';   

const ComplexButtonContainer = (props) => {
    
    const DropDown = useSelector(state => state.Dropdown);
    const dispatch = useDispatch();
    
    const [btnText, setbtnText] = useState("");
    const [showBlock,setShowBlock] = useState(false);
   
   
    const handleClick = (event) => {
        
        // 1: get the value of target
        let textOfElement = event.target.innerText;
        // 2: check belongsTo property of the target parent(drop-down)
        if (props.belongsTo && props.belongsTo === "Header") {
            // Hanle header dropdown box
            dispatch(HeaderBtnTitle(textOfElement));
        }
        if (props.belongsTo && props.belongsTo === "OptionsContainer") {
            // 3: based on belongsTo property update store state
            // Dispatch action 
            dispatch(OptionsContainerBtn(textOfElement));
        }
        if (props.belongsTo && props.belongsTo === "MainPageContainer") {
            // Handle main page complex button
            dispatch(BtnTitle(textOfElement));
        }
        setbtnText(textOfElement);
     

        setShowBlock(() => !DropDown);
        dispatch(ShowDropDown(!DropDown));
  
  
       
    }
        return (
            <div className="Content__Btn-Container">
                <ComplexBtn title={props.title} handleTitle={btnText} belongsTo={props.belongsTo} class={props.class ? props.class: "Btn-Small"} />

                <DropDownBox class={props.btnCol} handleClick={handleClick} state={showBlock} belongsTo={props.belongsTo} length={props.length} title={props.titles} />
            </div>
        )
}

export default ComplexButtonContainer;