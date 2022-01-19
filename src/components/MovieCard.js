import React from 'react'
import {Card,Button,Badge} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import {deleteHandler} from '../redux/action'
import {useDispatch,useSelector} from 'react-redux'
import Rate from './Rate'
function MovieCard({listMovie}) {
     const dispatch = useDispatch()
     const Movies = useSelector(state => state.myListOfmovies)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={listMovie.imgUrl} />
                <Card.Body>
                    <Card.Title>{listMovie.title}</Card.Title>
                    <Card.Text>
                    {listMovie.description}
                    </Card.Text>
                    <Card.Footer className="text-muted"><Badge pill bg="success">{listMovie.category}</Badge></Card.Footer>
                    <Card.Footer className="text-muted"><Badge pill bg="warning">{listMovie.date}</Badge></Card.Footer>
                    <Card.Footer className="text-muted"><Rate rating={listMovie.rate} /></Card.Footer>
                   <Link to={`/Details/${listMovie._id}`}> <Button variant="primary">Details</Button></Link> 
                   <Button variant="danger" onClick={()=>dispatch(deleteHandler(listMovie._id))}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
