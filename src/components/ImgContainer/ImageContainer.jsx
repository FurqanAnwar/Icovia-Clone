import React from 'react'

const ImageContainer = () => {
    let parentNode,targetNode,childs;
    const handleImgClick = (event) =>{
        console.log('image is clicked')
        console.log(event.target.parentNode)
        parentNode = event.target.parentNode;
        targetNode = event.target;
       
       
        childs = parentNode.childNodes;
       
         childs.forEach((element) =>{
           if(element.classList.contains('img-selected')){
                       element.classList.remove('img-selected');
                   }
         })
   
         targetNode.classList.add('img-selected');
        
       }
    return (
        <div className={`Preview-Container__Content`}>
           {
               [1,2,3,4,5,6,7,8,9].map( elem =>{
                   return <img onClick={handleImgClick} src={`src/assets/images/Pic-${elem}.png`} alt="image" className="Preview-Container__img"/>
               })
           }
    
        </div>
    )
}

export default ImageContainer
