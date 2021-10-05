import React from 'react'

const Slider = () => {
    return (
        <div className="container-range">
          <span className="container-range__decrement">-</span>  
        <input className="container-range__input" min={0} max={100}type="range"/>
          <span className="container-range__increment">+</span>
        </div>
    )
}

export default Slider
