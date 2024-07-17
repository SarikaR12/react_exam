import { DELETE_MOOVIE_ERROR, DELETE_MOOVIE_PENDING, DELETE_MOOVIE_SUCCESS, GET_MOOVIE_ERROR, GET_MOOVIE_PENDING, GET_MOOVIE_SUCCESS, POST_MOOVIE_ERROR, POST_MOOVIE_PENDING, POST_MOOVIE_SUCCESS, UPDATE_MOOVIE_ERROR, UPDATE_MOOVIE_PENDING, UPDATE_MOOVIE_SUCCESS } from "./action";



let initialState = {
    moovie: [],
    isLoading: false,
    isError: null
}

let adminReducer = (state = initialState, action) => {
    console.log(action, "reducer");

    switch (action.type) {
        case (GET_MOOVIE_PENDING, POST_MOOVIE_PENDING, DELETE_MOOVIE_PENDING, UPDATE_MOOVIE_PENDING): {
            return {
                ...state,
                isLoading: true,
            }
        };

        // get
        case GET_MOOVIE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                product: action.payload,
            }
        }

        // post
        case POST_MOOVIE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                moovie: state.moovie.concat(action.payload)
            }
        }

        // DELETE
        case DELETE_MOOVIE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                moovie: state.moovie.filter((val) => val.id != action.payload.id)
            }
        }

        // UPDATE
        case UPDATE_MOOVIE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                moovie: state.moovie.map((val) => val.id == action.payload.id ? { ...action.payload } : val)
            }
        }


        case (GET_MOOVIE_ERROR, POST_MOOVIE_ERROR, DELETE_MOOVIE_ERROR, UPDATE_MOOVIE_ERROR): {
            return {
                ...state,
                isError: action.payload,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default adminReducer;