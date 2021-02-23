import {React,useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";

import Tesla from '../assets/Tesla Corporation.png';
import Porsche from '../assets/Porsche.png';
import Lamborgini from '../assets/Lamborgini.png';
import Ferrari from '../assets/Ferrari.png';
import FordMustang from '../assets/Ford Mustang.png';



import ModelS from '../assets/Model S.png';
import Model3 from '../assets/Model 3.png';
import ModelX from '../assets/Model X.png';
import ModelY from '../assets/Model Y.png';
import Urus from '../assets/Urus.png';
import GTSport from '../assets/GT Sport.png';
import Taycan from '../assets/Taycan.png';
import F8 from '../assets/F8.png';

import model3 from '../assets/Model 3.png'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

var url = require('url');
var mongoUrl = "https://us-central1-hermes-websprint-backend.cloudfunctions.net/hermes/"

const Search = () => {
    const history = useHistory();
    const [searchData, setSearches] = useState([]);
    var qu = window.location.href;
    var q = url.parse(qu, true);
    var qdata = q.query;

    var mongoRequest = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(qdata)
    }
    useEffect(() => {
        alert("Searching for cars ...")
        const getCars = () => {fetch(mongoUrl,mongoRequest).then(response => response.json()).then(data => setSearches(data));}
        getCars()
        console.log(searchData)
      }, []);

    return (
        <div className="bg-gray-900 min-h-full p-20">
            {searchData.map((data,key) => {
                if(data.company === 'Tesla Corporation'){
                    var imagePath=Tesla
                }
                if(data.company === 'Porsche'){
                    var imagePath=Porsche
                }
                if(data.company === 'Lamborgini'){
                    var imagePath=Lamborgini
                }
                if(data.company === 'Ford Mustang'){
                    var imagePath=FordMustang
                }
                if(data.model === 'Model S'){
                    var modelPath=ModelS
                }
                if(data.model === 'Model 3'){
                    var modelPath=Model3
                }
                if(data.model === 'Model X'){
                    var modelPath=ModelX
                }
                if(data.model === 'Model Y'){
                    var modelPath=ModelY
                }
                if(data.model === 'Urus'){
                    var modelPath=Urus
                }
                if(data.model === 'F8'){
                    var modelPath=F8
                }
                if(data.model === 'Taycan'){
                    var modelPath=Taycan
                }
                if(data.model === 'GT Sport'){
                    var modelPath=GTSport
                }
                return(
                    <div key={key}>
                        <Card className="m-0 m-10">
                        <CardContent className="bg-black">
                            <div className="flex space-x-20 content-between m-0">
                                <img src={imagePath} style={{height:"80px"}}/>
                                    <img src={modelPath} style={{height:"200px",padding:"20px"}} />
                                <div className="bg-black p-6 " style={{width:"100%"}}>
                                    <Typography className="robotomono text-xl  p-1" style={{color:"white",fontFamily:"Roboto Mono"}}>
                                        Car Company : {data.company}
                                    </Typography>
                                    <Typography className="robotomono p-1" style={{color:"white",fontFamily:"Roboto Mono"}}>
                                        Car Model : {data.model}
                                    </Typography>
                                    <Typography className="robotomono p-1" style={{color:"white",fontFamily:"Roboto Mono"}}>
                                        Price/hr : Rs {data.price}/-
                                    </Typography>
                                    <Typography className="robotomono p-1" style={{color:"white",fontFamily:"Roboto Mono"}}>
                                        Location : {data.location}
                                    </Typography>
                                    <Typography className="robotomono p-1" style={{color:"white",fontFamily:"Roboto Mono"}}>
                                        Availability : {data.avail}
                                    </Typography>
                                </div>
                                <Button className="p-6 white h-10 self-center" style={{margin:"0px",width:"400px",padding:"30px",fontFamily:"Roboto Mono"}} variant="contained" onClick={e => {var query="id="+data.id; history.push({pathname:"/book",search:query})}}>Rent Now</Button>
                            </div>
                        

                            
                        </CardContent>
                        </Card>
                    </div>
                );
            })}
            
        </div>
    )
}

export default Search
