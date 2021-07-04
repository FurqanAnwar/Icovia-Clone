
const HandleImgReducer = (state = null, action) =>{
    switch(action.type){
        case 'ClickedImg':
            return action.payload;
        default:
            return state;

    }
}

export default HandleImgReducer;