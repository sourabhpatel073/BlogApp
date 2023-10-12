import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../Redux/action'
// import { click } from '@testing-library/user-event/dist/click'

function Home() {
  const [query,setQuery]=useState("")
    let data=useSelector((store)=>{
      return store.data
    })
let dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getBlogs(query)) 
    },[])

    function search(){
      
      dispatch(getBlogs(query)) 
    }
    console.log(data)
  return (
    <div>
    <div style={{
      width:"80%",
      color:"white",
      backgroundColor:"black",
      margin:"auto"
    }}>
    <input placeholder='search by title ' onChange={(e)=>{
          setQuery(e.target.value)
      }}/>
      <button onClick={()=>{search()}}>search</button>
    </div>
    <div style={{
      width:"80%",
      color:"white",
      backgroundColor:"orange",
      margin:"auto",
      marginBottom:"10px",
      borderRadius:"10px"
    }} >
       {data.map((el)=>{
        return <div style={{backgroundColor:"black"}}>
         <h1>{el.title}</h1>
         <p>
          {el.body}
         </p>
         <p>
          category-{el.category}
         </p>
         <p>
         Authore- {el.author}
         </p>
        </div>
      })}
    </div>
      
    </div>
  )
}

export default Home
