import React from 'react'
import { useHistory } from "react-router-dom";
import '../index.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Home = () => {
    const history = useHistory()
    return (
    <div>
        {/* <div className="w-1/2 left-0 buy absolute z-0 h-screen bg-cover justify-center hover:buyh" >
            <Button className="p-6 center white" variant="contained"><a href='/buy'>Buy</a></Button>
        </div>
        <div className="w-1/2 right-0 rent absolute z-0 h-screen bg-cover justify-center hover:renth" >
            <Button className="p-6 center white" variant="contained"><a href='/rent'>Rent</a></Button>
        </div> */}
        <div className="min-h-screen home bg-cover ">
            <div className="p-6 pt-36 min-w-screen top-1/2 text-6xl text-center montserrat">
                Experience the Future <b>NOW</b>
            </div>
            <div className="buysell space-x-32">
                <Button variant="contained" style={{width:"300px",backgroundColor:'rgba(256,256,256,0.7)',borderRadius:"30px",fontFamily:"Montserrat",fontWeight:"bold"}} onClick={()=> history.push('/buy')}>Buy</Button>
                <Button variant="contained" style={{width:"300px",backgroundColor:'rgba(256,256,256,0.7)',borderRadius:"30px",fontFamily:"Montserrat",fontWeight:"bold"}} onClick={()=> history.push('/rent')}>Rent</Button>
            </div>
        </div>
    </div>
    )
}

export default Home
