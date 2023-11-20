import { ON_LOGIN_ACCOUNT_FAIL, ON_LOGIN_ACCOUNT_SUCCESS } from "./actionTypes";

const INIT_STATE = {
    users: null
  };


  const blogReducer = (state = INIT_STATE,action)=>{
    switch(action.type){
        case ON_LOGIN_ACCOUNT_SUCCESS:
        console.log(action.payload);
      return {
        ...state,
        users: state.users.map((user) =>
          user._id.toString() === action.payload._id.toString()
            ? action.payload
            : user
        ),
      };
    case ON_LOGIN_ACCOUNT_FAIL:
        return{
            ...state,
            error:action.payload
        }
        default:
      return state;
    }
    
  }

  export default blogReducer