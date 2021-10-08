

const TitleReducer = (state = "30x45", action) =>{
    switch(action.type){
        case 'ShowTitle':
            return action.payload;
        default:
        return state;
    }
}

export default TitleReducer;