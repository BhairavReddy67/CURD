import axios from 'axios'
import React from 'react'
function EachComment({com}) {
    const [comUser,setcomUser]=React.useState("")

    // showcasing each user comment
    React.useEffect(()=>{
        axios(`http://localhost:3031/Admin/${com.userid}`)
        .then(res=>setcomUser(res.data.userName))
    },[])
    return (
        <div>
            <h6> 👤 {comUser}</h6>
            <p>{com.comment}</p>
            <hr/>
        </div>
    )
}

export default EachComment
