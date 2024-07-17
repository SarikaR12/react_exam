import axios from "axios";
import { BASE_URL, DELETE_MOOVIE, GET_MOOVIE, POST_MOOVIE, UPDATE_MOOVIE } from "../constant";


let get_moovie = async (action) => {
    // console.log(action, "from action");

    let { data, status } = await axios.get(BASE_URL + GET_MOOVIE);
    // console.log(res);
    return { data, status };
}

let post_moovie = async (action) => {
    console.log(action);

    let { data, status } = await axios.post(BASE_URL + POST_MOOVIE, action.payload);
    // console.log(res); 
    return { data, status }
}

let delete_moovie = async (action) => {
    console.log(action);

    let { data, status } = await axios.delete(BASE_URL + DELETE_MOOVIE, action.payload)
    // console.log(res);
    return { data, status }
}


let update_moovie = async (action) => {
    console.log(action);

    let {data} = await axios.update(BASE_URL + UPDATE_MOOVIE + `/${action.payload.id}`, action.payload)
    // console.log(res);
    return{data}
}


export { get_moovie, post_moovie, delete_moovie, update_moovie };