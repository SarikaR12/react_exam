import { call, put } from "redux-saga/effects";
import { delete_moovie, get_moovie, post_moovie, update_moovie } from "../../admin/api";
import { DELETE_MOOVIE_ERROR, DELETE_MOOVIE_SUCCESS, GET_MOOVIE_ERROR, GET_MOOVIE_SUCCESS, POST_MOOVIE_ERROR, POST_MOOVIE_SUCCESS, UPDATE_MOOVIE_ERROR, UPDATE_MOOVIE_SUCCESS } from "../../admin/action";

function* handle_get_moovie(action) {
    try {
        let { data, status } = yield call(get_moovie, action)
        // console.log(res);
        if (status === 200) {
            yield put({ type: GET_MOOVIE_SUCCESS, payload: data })
        }
    } catch (error) {
        yield put({ type: GET_MOOVIE_ERROR, payload: error });
    }
}

function* handle_post_moovie(action) {
    try {
        let { data, status } = yield call(post_moovie, action)
        // console.log(res);
        if (status === 201) {
            yield put({ type: POST_MOOVIE_SUCCESS, payload: data })
        }
    } catch (error) {
        yield put({ type: POST_MOOVIE_ERROR, payload: error });
    }
}

function* handle_delete_moovie(action) {
    try {
        let { data } = yield call(delete_moovie, action)
        // console.log(res);
        yield put({ type: DELETE_MOOVIE_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: DELETE_MOOVIE_ERROR, payload: error });
    }
}

function* handle_update_moovie(action) {
    try {
        let { data } = yield call(update_moovie, action)
        // console.log(res);
        yield put({ type: UPDATE_MOOVIE_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: UPDATE_MOOVIE_ERROR, payload: error });
    }

}

export { handle_get_moovie, handle_post_moovie, handle_delete_moovie, handle_update_moovie };