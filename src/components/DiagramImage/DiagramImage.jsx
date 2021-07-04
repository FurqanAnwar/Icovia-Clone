import React,{useState,useRef,useEffect} from 'react'
import {Image} from 'react-konva';
const DiagramImage = ({src}) => {
    console.log(src)
    const [selectedImage, setSelectedImage] = useState(null);
    const [xAxis,setXAxis]    = useState(0);
    const [yAxis,setYAxis]    = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const imageRef = useRef(null);

    useEffect(() =>{
        loadImage(src);
    },[src])
    const loadImage = (src) =>{
        const image = new window.Image();
        image.src = src;
        image.crossOrigin = "Anonymous";
        imageRef.current = image;
        console.log(image);
        console.log(imageRef)
        imageRef.current.addEventListener("load", handleLoad);
        console.log(selectedImage)
    }
    const handleLoad = () =>{
        setSelectedImage(imageRef.current)
        console.log(selectedImage)
    }
    // const getImage= (e) =>{
    //     loadImage(e.target.path)
    // }
   

    return (
        <>
            <Image x={xAxis} y={yAxis}  onDragStart={() => {
              
                setIsDragging(true);
              
            }}   draggable onDragEnd={e => {
                 setIsDragging(false);
                 setXAxis(e.target.x());
                 setYAxis(e.target.y());
                  
            
              }}image={selectedImage} />
        </>
    )
}

export default DiagramImage
