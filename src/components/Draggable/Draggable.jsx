import React, { Component } from 'react'

class Draggable extends Component {
    constructor(props){
        super(props);
        this.state = {
            

                offSetX: 0,
                offSetY: 0,
                clientX: 0,
                clientY: 0,    
                start: false
        }
        // this.start = this.start.bind(this);
    }
        componentDidMount(e){
            document.addEventListener('mousemove', (event) =>{
                // console.log(event.clientX,event.clientY)
            })
        }

        componentWillUnmount(e){
            document.removeEventListener('mousemove', (event) =>{
                console.log('Mouse move is removed ')
            })
        }
    start = (event) =>{

        const target = event.target;
        // target.classList.add('dragging')
        console.log(event)
    // let [X,Y] = [event.offsetX, event.offsetY];
    let X,Y = 0;
    X = event.nativeEvent.offsetX;
    Y = event.nativeEvent.offsetY;
    console.log(X,Y)
    let resultX = X + target.offsetLeft;
    let resultY = Y + target.offsetTop;
    console.log(resultX,resultY)
    console.log(this.state)
   this.setState({
       offSetX: resultX,
       offSetY: resultY,
       start: true
   }, () =>{
    //    console.log("State is updated")
   })
    // offSetX = X + target.offsetLeft;
    // offSetY = Y + target.offsetTop;
//    console.log(this.state)
    
    
    // console.log(`Values have been set  ${this.state.start} ${this.state.offSetY} ${this.state.offSetX}`);

    }

    move = (event,target) =>{
        this.setState({
            
               clientX: event.clientX,
               clientY: event.clientY
        })
        // clientX = event.clientX;
        // clientY = event.clientY;
        // console.log(clientX);
        // console.log(clientY);
        // console.log(offSetX);
        // console.log(offSetY);
        // console.log(this.state.clientX,this.state.offSetX,this.state.clientY,this.state.offSetY)
        if(this.state.start){
            
            // target.style.transform = `translateX(${this.state.clientX - this.state.offSetX}px) translateY(${this.state.clientY - this.state.offSetY}px)`;
        }
    }
    
   
    render() {
        return (
            <div onMouseDown={(e) =>{
            //     e.target.classList.add('Dragabble-Comp');
            //    this.setState({posX: e.clientX, posY: e.clientY});
               this.start(e)
            //    console.log(this.state.posX,this.state.posY)
            }} onMouseMove={(e) =>{
                this.move(e,e.target)
            }}
                onMouseUp={(e) =>{
                    target.classList.remove('dragging')
                    this.setState({
                        start: false,
                        clientX:0,
                        clientY:0,
                        offSetY:0,
                        offsetX:0
                    })
                }}>
               {this.props.children}
            </div>
        )
    }
}

export default Draggable
