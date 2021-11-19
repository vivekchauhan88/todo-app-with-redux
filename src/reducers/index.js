const reducer = (state = ["Feed cows", "Walk cows", "Drink water"], action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.slice(0, action.payload).concat(state.slice(action.payload + 1))
        case "EDIT":
            return [...state.slice(0, action.payload[0]), action.payload[1].target.value, ...state.slice(action.payload[0] + 1)]
        default:
            return state
    }
};

export default reducer;
