const AddImageReducer = (state= false, action) =>{
    switch(action.type){
        case 'AddImage':
            return action.payload;
        default:
            return state;
    }
}

export default AddImageReducer;