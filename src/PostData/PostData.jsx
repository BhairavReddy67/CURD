import axios from 'axios'
import React from 'react'
import EachPost from './EachPost'
// Geeting all Posts from API
function PostData({id}) {
    const [data,setData]=React.useState([])
    const [desc,setDesc]=React.useState("")
    function getData(){
        axios("http://localhost:3031/postData")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    }
    console.log(data)
// posting the Data


    const postSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3031/postData",{
            userId:id,
            desc,
            comments:[]
        })
        getData()
    }
    React.useEffect(()=>{
        getData()
    },[])

    return (
        <div style={{textAlign:"center"}}>
            <form onSubmit={postSubmit}>
                <textarea value={desc} placeholder={"hi post here"} onChange={e=>setDesc(e.target.value)}></textarea><br/>
                <input type="submit" value="Post"/>
            </form>
            {data && data.map(e=><EachPost post={e} id={id} />)}
        </div>
    )
}

export default PostData
