

const TitleReducer = (state = " ", action) =>{
    switch(action.type){
        case 'ShowTitle':
            return action.payload;
        default:
        return state;
    }
}

export default TitleReducer;