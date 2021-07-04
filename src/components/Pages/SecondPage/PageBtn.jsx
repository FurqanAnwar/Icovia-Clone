import React from 'react'
import ComplexBtn from 'src/components/Button/ComplexButton';
const PageBtn = () => {
    return (
        <>
          <div className="Content__Btn">
                        
                <div className="Content__Btn-Container">
                <ComplexBtn  length="1" titles={
                            {
                                btn_1: 'Sperry Tents'
                                
            
                            }
                        }  class="Btn-Stretch Btn-Compact" btnCol="Btn-Collection--Small Btn-Collection--Pos Btn-Collection--Overflow-y" />
                </div>
                
                <div className="Content__Btn-Container">
                <ComplexBtn  length="4" titles={
                            {
                                btn_1: 'Tables & Chairs',
                                btn_2: 'Dance Floors & Stages',
                                btn_3: 'Bars, Buffets, Stations',
                                btn_4: 'Lounge Furniture'
            
                            }
                        }  class="Btn-Stretch Btn-Compact" btnCol="Btn-Collection--Small Btn-Collection--Pos Btn-Collection--Overflow"/>
                </div>
               
                    </div>   
        </>
    ) 
}

export default PageBtn
