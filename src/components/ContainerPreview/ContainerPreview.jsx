import React,{useState,useRef} from 'react';
import PrintContainer from 'src/components/ContainerPreview/PrintContainer';
import {useSelector,useDispatch} from 'react-redux';
import HandleImg from 'src/actions/HandleImg';
import AddImage  from 'src/actions/AddImage';


    

let parentNode, targetNode, childs;
let ClickedImg, Dispatch, src, AddImg, PreviewContianerDiv,firstChild;
const ContainerPreview = (props) =>{
     ClickedImg = useSelector( state => state.HandleImg);
     AddImg = useSelector(state => state.AddImage);
     PreviewContianerDiv = useRef(null);
    
     Dispatch   = useDispatch();
    
    // firstChild = PreviewContianerDiv.current.childNodes;
    
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
     
    // let canvas = document.getElementById("canvas")
    // let context = canvas.getContext("2d");

 	// 	console.log("================================")
    // let image = new Image();
  
    // image.src = event.target.src;
    // image.width = "50px";
    // image.height = "50px";
    // context.drawImage(image,Math.ceil((Math.random() * 100) + 10), Math.floor((Math.random() * 100) + 10))
   	// console.log("=================================")

    }
   
    return(
        <div ref={PreviewContianerDiv} className={`Preview-Container__Content ${props.class}`}>
    <PrintContainer arr={props.arr}length={props.length}handleImgClick={handleImgClick}/>
        </div>
    )
}

export default ContainerPreview;