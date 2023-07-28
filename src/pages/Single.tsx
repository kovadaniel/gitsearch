import { Params, useParams } from "react-router-dom";
import {useEffect} from 'react'
import { useAppSelector } from "../hooks/useAppSelector";
import { useActions } from "../hooks/useActions";
import { NavLink } from "react-router-dom";

interface SingleParams extends Params<string>{
    login: string;
}

const Single = () => {
    const {user, loading, error} = useAppSelector(state => state.singleUser);
    const params = useParams<SingleParams>();
    // now we can find information about this user in our 'users' by 
    // searching in 'users' or we can make one more request to the server. 
    
    /*
    by this code  we can extract user information:
    const user = params.login ? findByLogin(params.login, users) : null;
    */

    //by this code we will make a request to the server via Redux
    const {fetchSingleUser} = useActions();
    useEffect(() => {
        if(params.login){
            fetchSingleUser(params.login);
        }
    }, [params])
    
    if(loading){
        return <div id="user-page">Загрузка...</div>
    }

    if(!user || error){
        return <div id="user-page">Нет такого пользователя</div>
    }

    return (  
        <div id="user-page" data-testid={'single-page'}>
            <NavLink to="/users" className='back-button'>Back </NavLink>
            <img src={user.avatar_url} alt={user.name} data-testid='user-image'/>
            <h3 className="user-title">{user.login}</h3>
            <div className="description">{user.site_admin ? 'admin' : 'not admin'}</div>
            
            {user.name && <h6 className="user-name">Name: {user.name}</h6>}
            <div>Followers: {user.followers}</div>
            <div>Following: {user.following}</div>

            <div>Public repositories: {user.public_repos}</div>

        </div>
    );
}
 
export default Single;