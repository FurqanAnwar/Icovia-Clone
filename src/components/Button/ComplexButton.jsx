
import React,{useState,useRef} from 'react';
import Button from 'src/components/Button/Button';
import DropDownBox from 'src/components/DropDownBox/DropDownBox';
import {useSelector,useDispatch} from 'react-redux';
import BtnTitle from 'src/actions/BtnTitle';
import HeaderBtnTitle from 'src/actions/HeaderBtnTitle';
import Dropdown from 'src/actions/Dropdown';


const ComplexBtn = (props) =>{
  
    const Title = useSelector( state => state.Title);
    // const ShowDropDown = useSelector( state => state.Dropdown);
    const dispatch = useDispatch();

const [showBlock,setShowBlock] = useState(false);
const [title, setTitle]        = useState('');

    const handleClick = (event) => {
       
        let valTitle = event.target.innerText;
        let  value = !showBlock;
        setShowBlock(value);
        
        if(!valTitle){
            valTitle = ''
        }

        if (props.btnIsComponentOfHeader) {
            dispatch(HeaderBtnTitle(valTitle))
            setTitle(valTitle);
            return;
        }
        
        setTitle(valTitle);
        dispatch(BtnTitle(valTitle));
           
    }

        return (
            <div className="complex_button_container">
            <Button  handleClick={handleClick} handleTitle={title} title={props.title} type="complex-btn" class={props.class}>
            </Button>
            <DropDownBox handleClick={handleClick} class={props.btnCol } length={props.length}state={showBlock} title={props.titles}/>
            </div>
       )
    
}

export default ComplexBtn;