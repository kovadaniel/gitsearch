/* Users */

export interface UserState {
    users: IUser[];
    usersCount: number;
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes{
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",

}
interface FetchUsersAction{
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction{
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: GitHubAPIResponse;
}
interface FetchUsersErrorAction{
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction


/* Single User */

export interface SingleUserState {
    user: IUser | null;
    loading: boolean;
    error: null | string;
}

export enum SingleUserActionTypes{
    FETCH_SINGLE_USER = "FETCH_SINGLE_USER",
    FETCH_SINGLE_USER_SUCCESS = "FETCH_SINGLE_USER_SUCCESS",
    FETCH_SINGLE_USER_ERROR = "FETCH_SINGLE_USER_ERROR",

}
interface FetchSingleUserAction{
    type: SingleUserActionTypes.FETCH_SINGLE_USER;
}
interface FetchSingleUserSuccessAction{
    type: SingleUserActionTypes.FETCH_SINGLE_USER_SUCCESS;
    payload: IUser;
}
interface FetchSingleUserErrorAction{
    type: SingleUserActionTypes.FETCH_SINGLE_USER_ERROR;
    payload: string;
}

export type SingleUserAction = FetchSingleUserAction
                             | FetchSingleUserSuccessAction
                             | FetchSingleUserErrorAction;  


/* Common Interface */

export interface IUser{
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    followering_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    followers: number;
    following: number;
    public_repos: number;
    name: string;
}

export interface GitHubAPIResponse{
    total_count: number;
    incomplete_results: string;
    items: IUser[];
}

export interface UserFilterType{
    query: string;
    sort: SortTypes;
}

export enum SortTypes{
    asc = 'asc', // ascending (from lower to bigger)
    desc = 'desc', // descending (from bigger to lower)
}




