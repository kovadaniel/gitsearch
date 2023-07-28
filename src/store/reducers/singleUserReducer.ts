import { SingleUserAction, SingleUserActionTypes, SingleUserState, UserAction, UserState } from "../../types/user";

const initialState: SingleUserState = {
    user: null,
    loading: false,
    error: null,
}

function singleUserReducer(state = initialState, action: SingleUserAction): SingleUserState {
    switch(action.type){
        case SingleUserActionTypes.FETCH_SINGLE_USER:
            return {
                ...state, 
                loading: true, 
                error: null, 
                user: null
            };
        case SingleUserActionTypes.FETCH_SINGLE_USER_SUCCESS:
            return {
                ...state, 
                loading: false, 
                error: null,
                user: action.payload};
        case  SingleUserActionTypes.FETCH_SINGLE_USER_ERROR:
            return {
                ...state, 
                loading: false, 
                error: action.payload, 
                user: null};
        default:
            return state;
    }
}

export default singleUserReducer;