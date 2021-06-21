import axios from 'axios'
import React from 'react'
import EachComment from './EachComment'
function Comment({data,postId,id}) {
    const [comment,setComment]=React.useState("")
    let postcomment=[...data,{userid:id,comment:comment}]

    // posting comment
    const commentSubmit=(e)=>{
        e.preventDefalut()
        axios.patch(`http:localhost:3031/postData/${postId}`,{
            comments:postcomment
            .then(res=>console.log(res.data))
        })
    }


    return (
        <div>
            <form onSubmit={commentSubmit}>
                <textarea value={comment} placeholder={"hi comment here"} onChange={e=>setComment(e.target.value)}></textarea><br/>
                <input type="submit" value="Comment"/>
            </form>
            {data && data.map(e=><EachComment com={e}/>)}
        </div>
    )
}

export default Comment
