import React from 'react'
import Step1 from 'src/assets/steps/step_1.svg';
import Step2 from 'src/assets/steps/step_2.svg';
import Section from 'src/components/Section/Section';
import Box from 'src/components/Box/Box';
const Main = () => {
    return (
        <main class="Main">
             <div className="Main__Heading">
                <h1 className="Main__Heading-Primary">There are two easy ways to get started:</h1>
                 </div>
            <div className="Main__Container">
                <Section 
                         headingSecondary=" Open an example design from our gallery "
                         src={Step1}
                         step='Step-1'
                         
                         btn="complex-btn"
                         class="Main__Container__Content-Left"
                         btnPrimary="Open This Plan"/>
                <span className="Main__Container__Content-Divider"></span>
                <Section 
                         headingSecondary="  Create your own plan by entering your venue dimensions.  "
                         src={Step2}
                         step='Step-2'
                         type="Custom"
                         btn="complex-btn"
                         class="Main__Container__Content-Right"
                         btnPrimary="Create a new plan"
                         component={Box}/>
            
            </div>
        </main >
       
    )
}

export default Main
