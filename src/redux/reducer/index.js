const initialState = {
    abc: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'xxx':
            return {
                ...state,
                abc: action.payload
            };
        default:
        return state
    };
};

export default rootReducer;