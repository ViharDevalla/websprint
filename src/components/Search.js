import {React,useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";

import Tesla from '../assets/Tesla Corporation.png';
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
                var imagePath = '../assets/'+data.company+'.png'
                var modelPath = '../assets/'+data.model+'.png'
                return(
                    <div key={key}>
                        <Card className="m-0 m-10">
                        <CardContent className="bg-black">
                            <div className="flex space-x-20 content-between m-0">
                                <img src={Tesla} style={{height:"100px",padding:"20px"}} />
                                    <img src={model3} style={{height:"200px",padding:"20px"}} />
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
