import React,{useRef,forwardRef} from 'react';
import img from 'src/assets/svgs/logo.svg';
import PageContent from 'src/components/Pages/SecondPage/PageContent';
import Header from 'src/components/Header/Header';
import OptionsContainer from 'src/components/Pages/SecondPage/OptionsContainer';
import Diagram from 'src/components/Diagram/Diagram';


const Container = (props) => {
    return (
        <>
            <div className="Section-Container__Content-Top">
           
                {props.side === 'Right' ? <Header title="24 Sprey Tent" classHeaderLogo="Page-Header-Logo" classHeaderContainer="Page-Header-Container" classHeaderTab="Page-Header-Tab"/> : <img src={img} alt="Logo Of Site"/> }
                
            </div>
            <div className="Section-Container__Content-Middle">
           
                {props.side === 'Right' ?  <OptionsContainer/> : null}
                {props.side === 'Right' ? <OptionsContainer type="div" class="Options-Container--2"/>: null}
                
                
            </div>
            <div className="Section-Container__Content-Bottom">
               
                <div className="Content Content-Before">
                   {props.side === 'Right' ?  <div className="container" id="container" style={{flexBasis:'70%'}}>{
                       <Diagram width={865} height={665}/>
                   }</div> : <PageContent/>}
                </div>
            </div>
        </>
    )
}

export default Container
