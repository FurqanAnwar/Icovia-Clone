import React from 'react'

const Links = (props) => {
    return (
        <div className="Links-Container">
        <a href="#" className="Links-Container_Link Link--1">{props.link_1}</a>
        <a href="#" className="Links-Container_Link Link--2">{props.link_2}</a>
        </div>
    )
}

export default Links
