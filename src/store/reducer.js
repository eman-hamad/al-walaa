import * as actionTypes from './actionTypes';
const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    results: []
}

const updateObject = (oldObject, updateProperties) =>{
    return {
        ...oldObject,
        ...updateProperties
    }
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.AUTH_START:
            return updateObject(state, {error: null, loading: true})
        case actionTypes.AUTH_SUCCESS:
            return updateObject(state, {
                token: action.idToken,
                userId: action.userId,
                error: null,
                loading: false
            })
        case actionTypes.AUTH_FAIL:
            return  updateObject(state, {
                error: action.error,
                loading: false
            })
        default:
            break;
    }
}

export default reducer