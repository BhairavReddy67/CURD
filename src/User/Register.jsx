import axios from 'axios'
import React from 'react'

function Register(props) {
    console.log(props)
    const [name,setName]=React.useState("")
    const [password,setPassword]=React.useState("")

    // Registration part
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3031/Admin",{userName:name,password})
        .catch(error=>console.log(error))
        props.handleReg()
        alert("Successfully Register Now Login")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>User Name</label><br/>
                <input type="text" value={name} onChange={e=>setName(e.target.value)}/><br/>
                <label>create Password</label><br/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/><br/>
                <input type="submit" value="SignUp"/>
                <input type="button" value="Signin" onClick={props.handleReg}/>
            </form>
        </div>
    )
}

export default Register
