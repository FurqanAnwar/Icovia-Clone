
import React,{useState,useRef} from 'react';
import Button from 'src/components/Button/Button';
import DropDownBox from 'src/components/DropDownBox/DropDownBox';
import {useSelector,useDispatch} from 'react-redux';
import BtnTitle from 'src/actions/BtnTitle';
import Dropdown from 'src/actions/Dropdown';


const ComplexBtn = (props) =>{
  
    const Title = useSelector( state => state.Title);
    // const ShowDropDown = useSelector( state => state.Dropdown);
    const dispatch = useDispatch();

const [showBlock,setShowBlock] = useState(false);
const [title, setTitle]        = useState('');

    const handleClick  = (event) => {
        let  value = !showBlock;
            setShowBlock(value);
        // dispatch(Dropdown());
        let valTitle = event.target.innerText;
        // // console.log(valTitle)
        dispatch(BtnTitle(valTitle));
            setTitle(valTitle);
            // getStateOfBtn(valTitle);
    //    console.log(Title)
    }

  
  
       
        return (
            <Button  handleClick={handleClick} handleTitle={title} title={props.title}type="complex-btn" class={props.class}>
                <DropDownBox class={props.btnCol } length={props.length}state={showBlock} title={props.titles}/>
            </Button>
       )
    
}

export default ComplexBtn;