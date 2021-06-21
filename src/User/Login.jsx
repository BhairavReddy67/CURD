import React from 'react'
import Register from './Register'
import axios from 'axios'
import PostData from '../PostData/PostData'
function Login() {
    const [name,setName]=React.useState("")
    const [password,setPassword]=React.useState("")
    const [reg,setReg]=React.useState(false)
    const [isAuth,setAuth]=React.useState(false)
    const [id,setId]=React.useState(0)


    // Authentication confirmation
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios(`http://localhost:3031/Admin?userName=${name}&password=${password}`)
        .then(res=>{
            let confim=res.data
            console.log(confim)
            if(confim.length==1){
                setAuth(true)
                setId(confim[0].id)
            }
        })
        .catch(error=>console.log(error))
    }
    const handleReg=()=>{
        setReg(!reg)
    }
    return (
        <div>
            {!isAuth && !reg && <form onSubmit={handleSubmit}>
                <label>User Name</label><br/>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/><br/>
                <label>Password</label><br/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/><br/>
                <input type="submit" value="Login"/>
                <input type="button" value="Register" onClick={handleReg}/>
            </form>}

            {/* Register form and auth */}
            {reg && <Register handleReg={handleReg}/>}
            {isAuth && <PostData id={id}/>}
        </div>
    )
}

export default Login
