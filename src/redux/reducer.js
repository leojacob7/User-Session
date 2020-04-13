import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './constant';

const initialState = {
    loading: true,
    data: [],
    error: ''
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, loading: state.loading }

        case FETCH_USERS_SUCCESS:
            return { ...state, data: action.payload, loading: action.loading }

        case FETCH_USERS_FAILURE:
            return { ...state, loading: action.loading, data: action.payload }
    
        default:
            return state;;
    }
};