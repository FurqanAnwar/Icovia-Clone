import React from 'react'

const SingleImgContainer = (props) => {
    return (
            
         <img className="Preview-Container__img"src={`src/assets/images/Custom Sizes/${props.Title}.JPG`} alt="image"/> 
    )
}

export default SingleImgContainer
