import * as types from '../authreducer/ActionType';


const initialState = {
    loading: false,
    error: false,
    isAuth: false,
    token: ''
}

export const authReducer = (state=initialState, {type, payload}) => {

  switch(type)
  {

    case "login/getLogin/success":
      return{
        ...state,isAuth:true
      }
      default:
        {
          return state
        }
  }



}
    