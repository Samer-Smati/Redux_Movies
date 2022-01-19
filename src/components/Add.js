import {Button, Form, Modal} from 'react-bootstrap';

import {useState} from 'react';
import {addHandler} from '../redux/action'

import {useDispatch,useSelector} from 'react-redux'
export default function Add() {
    const dispatch = useDispatch()
    const Movies = useSelector(state => state.myListOfmovies)
    // modal manipulation
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // state adding new movie
    const [title,settitle]= useState("");
    const [description,setdescription]= useState("");
    const [image,setimage]= useState("");
    const [rate,setrating]= useState(""); 

    const addMovie =()=> { 
    dispatch(addHandler({_id:Math.random(),title,description,imgUrl:image,rate})) 
    handleClose()
    }
 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Title</Form.Label>
    <Form.Control type="email" placeholder="Give the Title of the Movie" onChange = {(e)=> settitle(e.target.value)}  />
     <Form.Label>Movie Description</Form.Label>
    <Form.Control type="email" placeholder="Give a brief description"onChange = {(e)=> setdescription(e.target.value)}  />
     <Form.Label>PosterURL</Form.Label>
    <Form.Control type="email" placeholder="Give the adress of the Poster"onChange = {(e)=> setimage(e.target.value)}  />
     <Form.Label>Movie Rating</Form.Label>
    <Form.Control type="email" placeholder="Give The rate of the movie" onChange = {(e)=> setrating(e.target.value)} />
  
  
  </Form.Group>
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}