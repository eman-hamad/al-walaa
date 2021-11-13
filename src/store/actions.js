import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () =>{
    return{
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (idToken, userId)=> {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken, 
        userId
    };
};

export const authFail = (error) =>{
    return{
        type: actionTypes.AUTH_FAIL,
        error
    };
};

export const authVendor = (data, isSignUp) =>{
    return dispatch =>{
        dispatch(authStart())
        const authData = isSignUp ? {
            username: data.username,
            email: data.email,
            password: data.password,
            password2: data.confirmPassword,
            user_type: data.userType,
            latitude: data.longitude,
            longitude: data.latitude,
            phone_number: data.phone,   
            returnSecureToken: true
        } : {
            username: data.username,
            password: data.password,
            latitude: data.longitude,
            longitude: data.latitude,
        }
        console.log(authData)
        const message =  isSignUp ? 'Signed-Up Succesfuly' : 'Signed-In Succesfuly'
        const url = isSignUp ? 'https://el-wlaa.uc.r.appspot.com/accounts/register/' : 'https://el-wlaa.uc.r.appspot.com/accounts/login/'
        axios.post(url, authData)
            .then(res=>{
                console.log(res)
                dispatch(authSuccess(res.data.auth_token, res.data.id))
                alert(message)
            })
            .catch(e=> {
                const key = Object.keys(e.response.data)
                const userError = e.response.data[key] 
                alert(userError)
                dispatch(authFail(e))
            })
    };
};


export const authClient = (data, isSignUp) =>{
    return dispatch =>{
        dispatch(authStart())
        const authData = isSignUp? {
            username: data.username,
            email: data.email,
            password: data.password,
            password2: data.confirmPassword,
            user_type: data.userType,
            user_gender: data.user_gender,
            age: data.age,   
            social_status: data.social_status,
            working_field: parseInt(data.working_field),
            job: data.job,
            phone_number: parseInt(data.phone),
            number_of_children: parseInt(data.child_num),
            interests: parseInt(data.interests),
            latitude: data.longitude,
            longitude: data.latitude,
            region_id: parseInt(data.region),
            returnSecureToken: true
        } : {
            username: data.username,
            password: data.password,
            latitude: data.longitude,
            longitude: data.latitude,
        }
        const url = isSignUp ? 'https://el-wlaa.uc.r.appspot.com/accounts/register/' : 'https://el-wlaa.uc.r.appspot.com/accounts/login/'
        
        const message =  isSignUp ? 'Signed-Up Succesfuly' : 'Signed-In Succesfuly'
        
        console.log(authData)

        axios.post(url, authData)
            .then(res=>{
                console.log(res)
                dispatch(authSuccess(res.data.auth_token, res.data.id))
                alert(message)
            })
            .catch(e=> {
                const key = Object.keys(e.response.data)
                const userError = e.response.data[key] 
                alert(userError)
                dispatch(authFail(e))
            })
    };
};

