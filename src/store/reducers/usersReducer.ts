import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
    usersCount: 0,
}

function usersReducer(state = initialState, action: UserAction): UserState {
    switch(action.type){
        case UserActionTypes.FETCH_USERS:
            return {
                ...state, 
                loading: true, 
                error: null, 
                users: []
            };
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state, 
                loading: false, 
                error: null,
                users: action.payload.items,
                usersCount: action.payload.total_count};
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                ...state, 
                loading: false, 
                error: action.payload, 
                users: []};
        default:
            return state;
    }
}

export default usersReducer;