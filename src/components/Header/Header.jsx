import React from 'react'
import Button from '../Button/Button';
import ComplexBtn from 'src/components/Button/ComplexButton';
import Logo from 'src/assets/svgs/logo.svg';
import Links from 'src/components/Links/Links'
const Header = (props) => {
    return (
        <header className="Header">
            <div className={`Header__Container ${props.classHeaderContainer ? props.classHeaderContainer : ''}`}>

            <div className={`Header__Container__Logo ${props.classHeaderLogo ? props.classHeaderLogo : ''}`}>
                { props.title ? <h1>{props.title}</h1> : <img alt="logo" class="logo"src={Logo} />}
                
            </div>
            
            <div className={`Header__Container__Tab ${props.classHeaderTab ?props.classHeaderTab : ''}`}>
            <div className="Content__Btn-Container">
                <ComplexBtn titles={
                    {
                        btn_1: 'Inches',
                        btn_2: 'Matric'
    
                    }
                } length="2" type="complex-btn" class="Btn-Small"/>
                </div>
                
                {/* <Button title="Inches" type="complex-btn"/> */}
                <Links link_1="Login" link_2="Help" />
            </div> 

            </div>
        </header>
    )
}

export default Header
