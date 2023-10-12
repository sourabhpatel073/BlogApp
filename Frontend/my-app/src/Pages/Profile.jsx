import React, { useEffect, useState } from 'react'
import axios  from 'axios'
function Profile() {

  let url="http://127.0.0.1:8080";

  const [data,setData]=useState([])

  useEffect(()=>{
    const config = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
      }
    };
       axios.get(`${url}/blogs/profile`,config).then((res)=>{
                setData(res.data)
       })
  },[])
  return (
    <div style={{
      width:"80%",
      color:"white",
      backgroundColor:"orange",
      margin:"auto",
      marginBottom:"10px",
      borderRadius:"10px"}}>
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
  )
}

export default Profile
