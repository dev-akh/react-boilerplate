import * as type from "../types";

const initialState = {
    leaveTypes: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action: { type: string, payload: JSON}) => {
    switch (action.type) {
        case type.LEAVE_TYPES:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case type.LEAVE_TYPES_SUCCESS:
            return {
                ...state,
                loading: false,
                leaveTypes: action.payload,
            };                
        case type.LEAVE_TYPES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;               
    }
}

export default reducer;