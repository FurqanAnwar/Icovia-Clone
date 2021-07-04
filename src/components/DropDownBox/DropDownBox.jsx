import React,{useState} from 'react'
import Button from 'src/components/Button/Button'


const DropDownBox = (props) =>{
   
    // let newArr = [];
    // let length = props.length;
    // for(i=0; i< length; i++){
    //     newArr.push(i);
    // }
    // console.log(newArr)
    // console.log(props.length)
    let arr= [1,2,3,4];
    if(props.length == 2) arr=[1,2];
    if(props.length == 1) arr=[1];
    if(props.length == 10) arr=[1,2,3,4,5,6,7,8,9,10];
       
        return(
           
            <div className={`Btn-Collection ${props.state ? `Btn-Visible`: ``} ${props.class ? props.class : ``}`}>{
                
                
            arr.map(elem =>{
                    
                return <Button title={props.title[`btn_${elem}`]}  class="Btn-DropDown"/>
            }) }
            </div>
        )
    
}

export default DropDownBox;