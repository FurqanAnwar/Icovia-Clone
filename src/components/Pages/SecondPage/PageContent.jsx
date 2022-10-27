import React from 'react'
import PageBtn from 'src/components/Pages/SecondPage/PageBtn';
import ContainerPreview from 'src/components/ContainerPreview/ContainerPreview';
import BtnArr  from 'src/assets/js/ComplexBtn.js';

const PageContent = () => {
    
    return (
        <div className="Content-Bottom">
            <PageBtn/>
            <ContainerPreview arr={BtnArr}draggable="true"length="15" class="Page-ContainerPreview"/>
        </div>
    )
}

export default PageContent
