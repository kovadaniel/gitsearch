import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as UserActionCreators from '../store/action-creators/user'

/**
 * this hooks is use to bind all out action-creators to 
 * dispatch() from Redux. So we don't need to call
 * dispatch(SomeAsyncActionCreator()). Instead we can
 * simply SomeAsyncActionCreator()
 */
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UserActionCreators, dispatch)
}