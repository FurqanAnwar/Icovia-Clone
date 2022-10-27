import React from 'react'

const ToolsContainer = (props) => {
    let arr= [0,1,2,3,4,5,6,7];
    let namesArr= ['cameraTool','dimensionTool','dragTool','floorTool','lineTool',]
    return (
        <div className="ToolsContainer">
            {
                arr.map((elem, index) => {
                    
                    // elem === 3 || 7 ? <div className="ToolsContainer__Item">
                    //     <div className="ToolsContainer__Item-Img">Image</div>
                    //     <div className="ToolsContainer__Item-Pointer">Pointer</div>
                    // </div>: <div className="ToolsContainer__Item">
                       
                    //     <img src="#" alt=""/>
                    // </div>
                })
            }
        </div>
    )
}

export default ToolsContainer
