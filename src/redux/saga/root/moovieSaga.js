import { takeLatest } from "redux-saga/effects";
import { DELETE_MOOVIE_PENDING, GET_MOOVIE_PENDING, POST_MOOVIE_PENDING, UPDATE_MOOVIE_PENDING } from "../../admin/action";
import { handle_delete_moovie, handle_get_moovie, handle_post_moovie, handle_update_moovie } from "../admin/moovieManage";


function* handle_get_moovie_saga() {
    yield takeLatest(GET_MOOVIE_PENDING, handle_get_moovie)
}

function* handle_post_moovie_saga() {
    yield takeLatest(POST_MOOVIE_PENDING, handle_post_moovie)
}

function* handle_delete_moovie_saga() {
    yield takeLatest(DELETE_MOOVIE_PENDING, handle_delete_moovie)
}

function* handle_update_moovie_saga() {
    yield takeLatest(UPDATE_MOOVIE_PENDING, handle_update_moovie)
}


export { handle_get_moovie_saga, handle_post_moovie_saga, handle_delete_moovie_saga, handle_update_moovie_saga };