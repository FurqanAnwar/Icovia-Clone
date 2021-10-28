const DropdownReducer = (state = false, action) =>{
    switch(action.type){
        case "ShowDropDown":
            return action.payload;
        default: 
        return state;
    }
}

export default DropdownReducer;