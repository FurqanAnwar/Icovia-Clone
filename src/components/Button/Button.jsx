import React,{useRef} from 'react'
import Arrow from 'src/components/Arrow/Arrow';


const Button = (props) => {
    const btnRef = useRef();
    let btnClass;
   

   if(props.type === 'complex-btn') btnClass = 'Btn-Slash'

    return (
        
        <button  onClick={props.handleClick}className={`Btn ${props.class? props.class: ""} `}>
            <span className={`Btn__Title Btn--Block ${btnClass ? btnClass : ""} `}>
                
              {
                    props.type === 'complex-btn' ? props.handleTitle : props.title
                  
              } 
               </span>

             {props.type === 'complex-btn' ? <Arrow/> : null}
             {
                 props.children && props.children
             }
             
        </button>
    )
   
}




export default Button
