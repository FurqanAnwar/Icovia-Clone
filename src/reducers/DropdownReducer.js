const DropdownReducer = (state = false, action) =>{
    switch(action.type){
        case "ShowDropDown":
            return !state;
        default: 
        return state;
    }
}

export default DropdownReducer;