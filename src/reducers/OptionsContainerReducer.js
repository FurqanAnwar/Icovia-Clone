
const OptionsContainerReducer = (state = "Save", action) => {
    
    switch (action.type) {
        case "ShowOptionsContainerBtn":
            return action.payload
        default:
            return state
    }
}

export default OptionsContainerReducer;