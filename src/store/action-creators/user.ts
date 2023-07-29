import axios from "axios"
import { GitHubAPIResponse, IUser, SingleUserAction, SingleUserActionTypes, UserAction, UserActionTypes, UserFilterType } from "../../types/user"
import { Dispatch } from "react"
import { amoutOfUsersOnPage } from "../../constants";


const tkn = ['ghp_kVT', 'sSyEhyDV005FWpvpZd4Aq5gWtZ', 'K7uBm'];

export function fetchUsers(filter:UserFilterType, page = 1) {
    return async(dispatch: Dispatch<UserAction>) => {
        try{
            // set 'loading' from state to true
            dispatch({
                type: UserActionTypes.FETCH_USERS
            })
            
            // if user has already entered some text in search input
            const response = await axios.get<GitHubAPIResponse>('https://api.github.com/search/users', {
                headers: {
                    'Authorization': `token ${tkn.join('3')}` 
                },
                params: {
                    q: filter.query + ' in:login type:user',
                    sort: 'repositories',
                    order: filter.sort,
                    per_page: amoutOfUsersOnPage,
                    page: page,
                }
            })

            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data,
            })
        } catch (e){
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: 'Error has occured when "users" has been loading: ' + e})
        }
    }
}


export function fetchSingleUser(name: string) {
    return async(dispatch: Dispatch<SingleUserAction>) => {
        try{
            dispatch({
                type: SingleUserActionTypes.FETCH_SINGLE_USER
            })
            const response = await axios.get<IUser>('https://api.github.com/users/' + name)
            dispatch({
                type: SingleUserActionTypes.FETCH_SINGLE_USER_SUCCESS, 
                payload: response.data,
            })
        } catch (e){
            dispatch({
                type: SingleUserActionTypes.FETCH_SINGLE_USER_ERROR, 
                payload: 'Error has occured when a "user" has been loading: ' + e})
        }
    }
}