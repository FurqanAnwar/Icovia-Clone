import React from 'react'

const SingleImgContainer = (props) => {
    // console.log(props.Title)
    return (
            
         <img className="Preview-Container__img"src={`src/assets/images/Custom Sizes/${props.Title}.JPG`} alt="image"/> 
    )
}

export default SingleImgContainer
