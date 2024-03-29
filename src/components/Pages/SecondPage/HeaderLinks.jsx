import React,{useState} from 'react'

const HeaderLinks = () => {
    const [clicked,setClicked] = useState(false);
    let names = ['File','Edit','View','Help'];
    let arr = [0,1,2,3];
    let target,targetIsClicked;
    let value;
    return (
        <>
            {
                arr.map((elem,index) =>{
                  return <a href="#" key={`${index}`} className="Link"><span onClick={
                    (event) =>{
                       target = event.target;
                      
                      
                      value = !clicked;
                        setClicked(value);
                    }
                  }className="Page-Header__link">
                      {
                          names[elem]
                      }
                    {
                        // clicked  ? <DropDown/> : null
                    }
                  </span> </a>
                })
            }
            
        </>
    )
}

export default HeaderLinks
