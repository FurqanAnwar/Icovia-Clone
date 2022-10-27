import React,{useState,useRef,useEffect} from 'react'
import {Stage,Layer,Rect, Image} from 'react-konva';
import DiagramImage from 'src/components/DiagramImage/DiagramImage';
import {useSelector,useDispatch} from 'react-redux';
// import AddImage  from 'src/actions/AddImage';
const Diagram = (props) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const imageRef = useRef(null);
  const ClickedImg = useSelector(state => state.HandleImg);
  const AddImage = useSelector(state => state.AddImage);
  // const Dispatch = useDispatch();
  
  // useEffect(() =>{
  //   // Dispatch(AddImage(false));
  //   console.log(AddImage)
  // },[AddImage])

   
    return (
      // <canvas id="canvas"></canvas>
       <Stage width={props.width} height={props.height}>
         <Layer>
         {/* <Rect width={50} height={50} fill="red" /> */}
         {
            AddImage ? <DiagramImage src={ClickedImg!= null ? ClickedImg : ' '}/>: null

         }
          
         {/* <Image x={100} y={100} image={selectedImage} /> */}
         </Layer>
       </Stage>
    )
}

export default Diagram
