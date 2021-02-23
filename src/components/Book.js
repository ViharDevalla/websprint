import {React,useState,useEffect} from 'react';
//import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Button from '@material-ui/core/Button';
var url = require('url');
var mongoUrl = "https://us-central1-hermes-websprint-backend.cloudfunctions.net/hermes/"


const Book = () => {
    var token ={"login":"False"}
    const [bookData, setBookData] = useState([]);
    var currentUrl = window.location.href;
    var parsedUrl = url.parse(currentUrl, true);
    var queryData = parsedUrl.query

    var mongoRequest = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(queryData)
    }

    useEffect(() => {
        const getFlights = () => {fetch(mongoUrl,mongoRequest).then(response => response.json()).then(data => {setBookData(data);console.log(bookData)});}
        getFlights()
    }, []);

    if(window.sessionStorage.getItem("token")){
        var token = jwt_decode(window.sessionStorage.getItem("token"))
    }
    
    if(token.login === "True"){
        return (
            <div className='bg-gray-900 min-h-full text-black bg-cover' style={{backgroundColor:"black"}}>
                {
                    bookData.map((data,key) => {
                        {var payUrl = "/payment?id="+queryData.id+"&price="+data.price}
                        return (
                            <div key={key} className="p-20 centerdiv" style={{justifyContent:'center', alignItems:'center',fontFamily:"Roboto Mono",fontSize:"20px",color:"white"}}>
                            <br/>
                            <h1 className="text-white p-50">Your Flight Details</h1><br/>
                            Your Name : {token.user}<br/>
                            Company Name : {data.company}<br/>
                            Model Name : {data.model}<br/>
                            Location : {data.location}<br/>
                            Availability: {data.avail}<br/>
                            Price : ₹{data.price}<br/><br/>
                            <a href={payUrl} style={{width:"40%"}}><Button id="rzp-button1" style={{width:"100%",fontFamily:"Roboto",fontSize:"18px",color:"black",backgroundColor:"white"}}>Proceed To Pay</Button></a>
                          </div>
                      );
                    })
                }
                
            </div>
        )
    }

    else{
        return(
            <div className="bg-gray-900 min-h-full">
                <div style={{display: 'flex',justifyContent:'center', alignItems:'center',fontFamily:"Roboto",fontSize:"30px"}}>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <pre style={{color:"white"}}>
                            <br/>
                            You must login to book a flight<br/><br/>
                            <a href="/login"><Button id="rzp-button1" style={{width:"100%",fontFamily:"Cabin",fontSize:"18px"}}>Login</Button></a>
                        </pre>
                    </div>
                </div>
            </div>
        )

    }
    
}

export default Book
