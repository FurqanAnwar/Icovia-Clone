const HeaderTitleReducer = (state = "", action) => {
    switch (action.type) {
        case 'ShowHeaderTitle':
            return action.payload;
        default:
        return state;
    }
}

export default HeaderTitleReducer;