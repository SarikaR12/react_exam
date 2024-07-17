import { all } from "redux-saga/effects";
import { handle_delete_moovie_saga, handle_get_moovie_saga, handle_post_moovie_saga, handle_update_moovie_saga } from "./root/moovieSaga";


function* rootSaga() {
    yield all([handle_get_moovie_saga(),
    handle_post_moovie_saga(),
    handle_delete_moovie_saga(),
    handle_update_moovie_saga()
    ])
}
export default rootSaga;