import React from 'react'
import Button from 'src/components/Button/Button';
import ComplexBtn from 'src/components/Button/ComplexButton';
import Slider from 'src/components/Pages/SecondPage/Slider';
const OptionsContainer = (props) => {
    let arr = [1,2,3,4,5];
    let newArr = [1,2,3,4,5,6,7];
    let names = ['New','Save','Print','Share','Undo']
    let tools = ['selectTool','dragTool','wallTool','textTool','dimensionTool','zoomInTool']
    return (
        <div className={`Options-Container ${props.class ? props.class : ''}`}>
        {
            props.type === 'div' ? 
            newArr.map((elem,index) =>{
                return(
                    <div className={`Options-Container-Item Options-Container-Item--${elem}`}>
                       {
                     index < 6 ? <img src={`src/assets/images/${tools[index]}.svg`} alt="Image"/> : <>
                     <div className="Options-Container-Item__Slider">

                     <Slider/>
                     <span>Fit to view</span> 
                     </div>
                     <div className="Options-Container-Item__Btn"><span>Show basic tools</span></div>
                 </>
        
                    } 
                   
                        
                    </div>
                )
            }) :
            arr.map((elem,index) =>{
                if(elem == 2){
                    return(<div className="Content__Btn-Container"><ComplexBtn titles={
                        {
                            btn_1: 'Button1',
                            btn_2: 'Button2'
        
                        }
                    } length="2" type="complex-btn" class="Btn-Small"/></div>)
                }

                return (<Button title={names[index]} />)
            })
        }
        </div>
    )
}

export default OptionsContainer
