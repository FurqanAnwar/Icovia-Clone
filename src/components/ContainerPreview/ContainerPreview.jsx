import React,{useState} from 'react';
import PrintContainer from 'src/components/ContainerPreview/PrintContainer';
import {useSelector,useDispatch} from 'react-redux';
import HandleImg from 'src/actions/HandleImg';
import AddImage  from 'src/actions/AddImage';


    

let parentNode, targetNode, childs;
let ClickedImg, Dispatch, src, AddImg;
const ContainerPreview = (props) =>{
     ClickedImg = useSelector( state => state.HandleImg);
     AddImg     = useSelector( state => state.AddImage);
    //  Title      = useSelector( state => state.Title);
     Dispatch   = useDispatch();
  
    
const handleImgClick = (event) =>{
    
     parentNode = event.target.parentNode;
     targetNode = event.target;
    
        // slice out the string(src of img tag), we get encoded string 
           src = targetNode.src.slice(22);
        // decode to get the actual string back 
           src = decodeURI(src);


     childs = parentNode.childNodes;
     childs.forEach((element) =>{
        if(element.classList.contains('img-selected')){
                    element.classList.remove('img-selected');
                }
      })

      targetNode.classList.add('img-selected');
      Dispatch(HandleImg(src));
      Dispatch(AddImage(true))
      console.log(AddImg)
    }
   
    return(
        <div className={`Preview-Container__Content ${props.class}`}>
           
    <PrintContainer arr={props.arr}length={props.length}handleImgClick={handleImgClick}/>
     {/* <PrintContainer arr={props.arr}length={props.length}handleImgClick={handleImgClick}/> */}

            {/* {
                props.draggable ?<PrintContainer arr={props.arr}length={props.length}handleImgClick={handleImgClick}/>: <PrintContainer arr={props.arr}length={props.length}handleImgClick={handleImgClick}/>

            } */}
                {/* {props.draggable === true ? <div className="box"></div>: <PrintContainer length={props.length}handleImgClick={handleImgClick}/>} */}
                
                {/* /* <PrintContainer handleImgClick={handleImgClick}/>
                <PrintContainer handleImgClick={handleImgClick}/>  */}
             

            
           
             
            
            
        
           
        
           
            
        </div>
    )
}

export default ContainerPreview;