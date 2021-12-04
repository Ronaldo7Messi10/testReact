import React from 'react'
import {show} from './App'

const Movie = ({id,name,year,img}) => {
    //const {id,name,year,img}=props.data
    return(
      <>
      <img width='100px' height='100px' src={img} alt={name} onClick={() =>show(name)}/>
      <div>{name}</div>
      <div>{year}</div>
      <br></br>
      </>
    )
    
    }
    

export default Movie
