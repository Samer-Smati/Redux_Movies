import {ADD,DELETE,MYLISTFROMAPI} from "./action-type" 
import axios from 'axios'
export const addHandler = (LIST) => {
 return{
     type:ADD,
     payload:LIST
 }
}
export const deleteHandler = (ID) => {
     return{
     type:DELETE,
     payload:ID
 }
}
export const myListHandler = () => {
    return (dispatch) => {
    return axios.get("https://movie-app-gmc.herokuapp.com/api/movies").then((res) => {
      dispatch({
        type: MYLISTFROMAPI,
        payload: res.data,
      });
    });
  };
}