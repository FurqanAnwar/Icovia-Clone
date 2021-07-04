import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux';
import Draggable from 'src/components/Draggable/Draggable';
const PrintContainer = (props) =>{
    const Title = useSelector( state => state.Title);
    const[array,setarray]=useState(props.arr.collection);
    const[finalArr,setfinalArr]=useState([]);
    
    let finalArr1= [];
    
    
    // console.log(Title);
    
    useEffect(() => {
        if((array!=undefined||array!=null)){
            // console.log("TITLE",Title)
            array.forEach(z => {
        if(z.name===Title){
                    // console.log("check it");
                    finalArr1.push(z);
                    setfinalArr(finalArr1);
                }
                // console.log("00000",z.name);
            });
    

        }
    }, [Title])

    // console.log("state",finalArr);
// arr.map((z,id)=>{
//     console.log(z.name);
// })

  
    // console.log(arr[0]);
   
    return(<>
        {finalArr.length>0?
       finalArr.map((x)=>{
           return(
x.items.map(z=>{
    return <img onClick={props.handleImgClick} src={`src/assets/images/${x.name}/${z}.svg`} alt="image" className="Preview-Container__img"/>
}))
      
}): null
}      
     </>   
    )

       }
export default PrintContainer;

  /** Bad Practice Should'nt have done this, i will resolve it soon enough
             * to good practice
             */
        //    if(elem === 1){
        //        extension = "jpg";
        //        return  <img onClick={props.handleImgClick}src={`src/assets/images/Pic-${elem}.${extension}`} alt="image" className="Preview-Container__img"/>
        //    }
        //    extension = "png";
        // return  <img onClick={props.handleImgClick}src={`src/assets/images/Pic-${elem}.${extension}`} alt="image" className="Preview-Container__img"/>