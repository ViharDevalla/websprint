import React from 'react'
import '../index.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const Home = () => {
    return (
    <div>
        <div className="w-1/2 left-0 buy absolute z-0 h-screen bg-cover justify-center hover:buyh" >
            <Button className="p-6 center white" variant="contained">Buy</Button>
        </div>
        <div className="w-1/2 right-0 rent absolute z-0 h-screen bg-cover justify-center hover:renth" >
            <Button className="p-6 center white" variant="contained"><a href='/rent'>Rent</a></Button>
        </div>
    </div>
    )
}

export default Home
