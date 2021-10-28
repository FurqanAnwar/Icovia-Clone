const HeaderTitleReducer = (state = "Inches", action) => {
    console.log("This is the action we received", action)
    switch (action.type) {
        case 'ShowHeaderTitle':
            return action.payload;
        default:
        return state;
    }
}

export default HeaderTitleReducer;