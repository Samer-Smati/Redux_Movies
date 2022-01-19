import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useParams} from "react-router-dom"; 
function Details() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const found = useSelector((state)=> 
    state.myListOfmovies.filter(movie => movie._id == id) 
    )
    return (
        <div> 
            <h1>{found[0].title}</h1>
            <div className="card mb-3">
            <img src={found[0].imgUrl} className="card-img" alt={found[0].title} />
            <div className="card-body">
                <h5 className="card-title">{found[0].title}</h5>
                <p className="card-text">{found[0].description}</p>
                <p className="card-text"><small className="text-muted">{found[0].rate}</small></p>
                <div>
                    {found[0].trailer}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Details
