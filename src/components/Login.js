import {React,useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const axios = require('axios');

var mongoUrl = "https://us-central1-hermes-websprint-backend.cloudfunctions.net/hermes/auth"

const Login = () => {
    const [username,setUsername] = useState()
    const [pass,setPass] = useState()

    const handleSubmit = event => {
        var mongoRequest = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"user":username,"pass":pass})
        }

        axios.post(mongoUrl,{"user":username,"pass":pass}).then(function (response) {
            console.log(response);
            var status = response.status
            var bearerToken = response.data.token
            alert("Verifying the account details")
            if(status == 200){
                alert("Login Successful")
                //alert(JSON.stringify(bearerToken))
                window.sessionStorage.setItem("token",bearerToken)
                window.open("/","_self")
            }
            else{
                alert("Incorrect Username/Password")
            }
          })
          .catch(function (error) {
            console.log(error);
            alert(error)
          });
          //event.preventDefault()
    }

    return (
        <div className='bg-gray-900 min-h-full login bg-cover'>
            <div className='w-1/4 h-screen bg-gray-400 float-right'>
                <div className='text-black p-5 m-5 align-center'>
                    <h1 className='text-4xl m-2 montserrat'>Login</h1>
                        <TextField className="w-full text-white mb-8" style={{fontFamily:"Roboto Mono",color:"white",margin:"10px"}} id="outlined-basic" label="Username" variant="outlined" value={username} onChange={({target}) => setUsername(target.value)} />
                        <TextField className="w-full m-10 " id="outlined-basic" style={{fontFamily:"Roboto Mono",color:"white",margin:"10px"}} label="Password" variant="outlined" value={pass} onChange={({target}) => setPass(target.value)} />
                    <br/>
                        <Button className="p-6 white h-10 self-center w-full" style={{margin:"10px",padding:"10px",fontFamily:"Roboto Mono"}} variant="contained" color="secondary" onClick={()=> handleSubmit()}>Login</Button>
                    <a className="m-2 text-blue-900" href="/register">Create a new account</a>
                </div>
            </div>
        </div>
    )
}

export default Login
