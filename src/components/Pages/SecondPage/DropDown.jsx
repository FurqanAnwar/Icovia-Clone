import React,{Component} from 'react'

const DropDown = () => {
    let names = ['new','Open My Plans', 'Save', 'Save as', 'Clear', 'Delete', 'Print',
'Share', 'Export to JPEG'];
    let arr = [0,1,2,3,4,5];
    return (
        <div className="DropDown">
            <ul className="DropDown__List">{

                arr.map( elem =>{
                    return (<li className="DropDown__List-Item">
                        <a href="#">
                            <span>
                                names[elem]
                            </span>
                        </a>
                    </li>)
                })
            }
            </ul>
        </div>
    )
}

export default DropDown
