import {React,useState} from 'react'
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

var mongoUrl = "https://us-central1-hermes-websprint-backend.cloudfunctions.net/hermes/users"

const Register = () => {
    var history = useHistory();
    const [username,setUsername] = useState()
    const [pass,setPass] = useState()

    const handleSubmit  = event => {
        var mongoRequest = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"user":username,"pass":pass,"booking":[]})
        }
        fetch(mongoUrl,mongoRequest).then(response => alert("Your Account has been successfully created"));
        history.push('/login');
        console.log(username,pass)
    }
    return (
        <div className='bg-gray-900 min-h-full login bg-cover'>
            <div className='w-1/4 h-screen bg-gray-400 float-right'>
                    <div className='text-black p-5 m-5 mt-32 align-center'>
                        <h1 className='text-4xl m-2 montserrat'>Register</h1>
                        <TextField className="w-full text-white mb-8" style={{fontFamily:"Roboto Mono",color:"white",margin:"10px"}} id="outlined-basic" label="Username" variant="outlined" value={username} onChange={({target}) => setUsername(target.value)}/>
                        <TextField className="w-full m-10 " id="outlined-basic" style={{fontFamily:"Roboto Mono",color:"white",margin:"10px"}} label="Password" variant="outlined" value={pass} onChange={({target}) => setPass(target.value)}/>
                        <br/>
                        <Button type="submit "className="p-6 white h-10 self-center w-full" style={{margin:"10px",padding:"10px",fontFamily:"Roboto Mono"}} variant="contained" color="secondary" onClick={() => {handleSubmit()}}>Register</Button>
                    </div>
            </div>
        </div>
    )
}

export default Register;
