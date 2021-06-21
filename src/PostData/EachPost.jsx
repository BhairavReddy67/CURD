import axios from 'axios'
import React from 'react'
import Comment from './Comment'
function EachPost({post,id}) {
    const [postUser,setPostUser]=React.useState("")
    const [comment,setComment]=React.useState(false)
    const styles={
        textAlign:"left",
        width:"500px",
        border:"1px solid grey",
        margin:"5px",
        padding:"10px"
    }
    // showcasing by user post
    React.useEffect(()=>{
        axios(`http://localhost:3031/Admin/${post.userId}`)
        .then(res=>setPostUser(res.data.userName))
    },[])
    console.log(postUser)


    return (
        <div style={styles}>
            <h3>👤 {postUser}</h3>
            <p>{post.desc}</p>
            <button onClick={()=>setComment(!comment)}>comments</button>
            {comment && <Comment data={post.comments} postId={post.id} id={id}/>}
        </div>
    )
}

export default EachPost
