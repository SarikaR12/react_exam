import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_MOOVIE_PENDING, GET_MOOVIE_PENDING, POST_MOOVIE_PENDING, UPDATE_MOOVIE_PENDING } from '../action';


const Manage = () => {

    let moovieName = useRef();
    let price = useRef();
    let desc = useRef();
    const [view, setview] = useState({ moovieName: '', price: '', desc: '' })
    const [model, setmodel] = useState("none")

    let dispatch = useDispatch()

    let moovie = useSelector((state) => state.adminReducer)
    console.log(moovie);
    useEffect(() => {
        dispatch({ type: GET_MOOVIE_PENDING })
    }, [])



    //add new moovie

    let addMoovie = () => {
        let moovie = {
            moovieName: moovieName.current.value,
            price: price.current.value,
            desc: desc.current.value,
        }

        dispatch({ type: POST_MOOVIE_PENDING, payload: moovie })
    }


    //remove 

    let remove = (student) => {
        console.log(student);
        dispatch({ type: DELETE_MOOVIE_PENDING, payload: moovie })
    }

    //update

    let viewData = (val) => {
        setview(val)
        setmodel("block")
    }

    let closee = () => {
        setmodel("none")
    }

    let handle = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })
    }
    let save = (e) => {
        e.preventDefault();
        setmodel("none")
        dispatch({ type: UPDATE_MOOVIE_PENDING, payload: view })
    }


    return (
        <div>
            <div className="moovie-data">
                <div className="container">
                    <div className="model-btn d-flex justify-content-end">
                        <button className="button" data-bs-toggle="modal" data-bs-target="#model">Add ++</button>
                    </div>

                    <div className="modal fade" id="model">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Student Details</h1>
                                    <button className="btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <label>moovieName : <input type="text" className="form-control" name='mooviName' ref={moovieName} /></label>
                                        <label>price : <input type="number" className="form-control" name='price' ref={price} /></label>
                                        <label>desc: <input type="text" className="form-control" name='desc' ref={desc} /></label>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button className="button" onClick={addMoovie}>add moovie</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="update_model" style={{ display: `${model}` }}>
                        <form onSubmit={save}>
                            <div className="close-btn d-flex justify-content-end ">
                                <button className='bg-white border-0' onClick={closee}><i className="fa-regular fa-circle-xmark"></i></button>
                            </div>
                            <label>moovieName: <input type="text" name='moovieName' className="form-control" value={view.mooviName} onChange={handle} /></label>
                            <label>price : <input type="number" name='price' className="form-control" value={view.price} onChange={handle} /> </label>
                            <label>desc : <input type="number" name='desc' className="form-control" value={view.desc} onChange={handle} /> </label>
                            <div className="view-btn d-flex justify-content-center mt-3">
                                <button className='button' onClick={save}>save</button>
                            </div>
                        </form>
                    </div>
                    <div className="moovie-list text-center">
                        <table className="table text-center" cellPadding="10px">
                            <thead>
                                <tr>
                                    <th>moovieName</th>
                                    <th>price</th>
                                    <th>desc</th>
                                    <th>delete</th>
                                    <th>update</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    moovie.moovie?.map((val, ind) => (
                                        <React.Fragment key={ind}>
                                            <tr>
                                                <td>{val.moovieName}</td>
                                                <td>{val.price}</td>
                                                <td>{val.desc}</td>
                                                <td><button className='trash' onClick={() => remove(val.id)}><i className="fa-solid fa-trash"></i></button></td>
                                                <td><button className='trash' onClick={() => viewData(val)} ><i className="fa-regular fa-pen-to-square"></i></button></td>
                                            </tr>
                                        </React.Fragment>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage;





