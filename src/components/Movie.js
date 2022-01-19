import React,{useEffect} from 'react'
import MovieCard from './MovieCard'
import {myListHandler} from '../redux/action'
import {useDispatch,useSelector} from 'react-redux'
function Movie({search, rating}) { 
    const dispatch = useDispatch()
    const Movies = useSelector(state => state.myListOfmovies)

    useEffect(() => {
        dispatch(myListHandler())
    }, [])
    
    return ( 
        <div className='movie'>
        { 
               Movies?.filter (el=>el.title.toUpperCase().includes(search.toUpperCase().trim())
               && el.rate>=rating )
               .map((el,key) => <MovieCard key={el._id} listMovie={el}/>)
        }
        </div>
    )
}

export default Movie 
