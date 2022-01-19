import {useState} from 'react';
import './App.css';
import Movie from './components/Movie'
import NavBar from './components/NavBar'
import {Route,Switch} from 'react-router-dom'
import Details from './components/Details'
import {useDispatch,useSelector} from 'react-redux'
import Add from './components/Add';
import Filter from './components/Filter';
function App() {
  const Movies = useSelector(state => state.myListOfmovies)
   const [movieList,setmovieList]=useState(Movies)
// function for adding a new movie

    const addHandler= (newMovie)=> {
      setmovieList([...movieList,newMovie])
    }

    const [search,setsearch] = useState("")
    
    const [rating,setrating] = useState(1)
  return (
    <div className="App">
      <NavBar />
      <Filter setsearch={setsearch}  rating ={rating} setrating={setrating} />
      <Add addHandler= {addHandler} />
      <Switch> 
        <Route exact path='/' render={(props)=> <Movie {...props} List={Movies} search = {search} rating={rating}/>}/>
        <Route path='/Details/:id' render={(props)=> <Details {...props} List={Movies} search = {search} rating={rating}/>}/>
      </Switch>
    </div>
  );
}

export default App;
