import React,{useState} from 'react'
import Button from 'src/components/Button/Button'
import { useSelector,useDispatch } from 'react-redux';



const DropDownBox = (props) =>{
    // Keep track of dropdown for header, optionsContainer and first page
// add click logic and update state based on {componentBelongsTo} property
    const DropDownState = useSelector(state => state.Dropdown);
    
    let arr= [1,2,3,4];
    if(props.length == 2) arr=[1,2];
    if(props.length == 3) arr=[1,2,3];
    if(props.length == 1) arr=[1];
    if(props.length == 10) arr=[1,2,3,4,5,6,7,8,9,10];
       
        return(
           
            <div className={`Btn-Collection ${DropDownState ? `Btn-Visible`: ``} ${props.class ? props.class : ``}`}>{
                
                
            arr.map((element,index) =>{
                // return <ComplexBtn  key={ element} title={props.title[`btn_${element}`]}  btnBelongsTo="optionsContainer" class="Btn-DropDown" />
                return <Button handleClick={props.handleClick} key={ element}title={props.title[`btn_${element}`]}  class="Btn-DropDown"/>
            }) }
            </div>
        )
    
}


export default DropDownBox;