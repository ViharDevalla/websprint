import {React,useState,useEffect} from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useHistory } from "react-router-dom";

var razorpayUrl = "https://us-central1-flightbookingpes.cloudfunctions.net/flight"
var url = require('url');
const Payment = () => {
    const [bookData, setBookData] = useState([]);
    const history = useHistory()
    //var mongoUrl = "http://localhost:8080/"
    var mongoUrl = "https://us-central1-flightbookingpes.cloudfunctions.net/flight/"
    var currentUrl = window.location.href;
    var parsedUrl = url.parse(currentUrl, true);
    var queryData = parsedUrl.query
    var mongoRequest = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(queryData.id)
    }
    /*
    useEffect(() => {
        const getFlights = () => {fetch(mongoUrl,mongoRequest).then(response => response.json()).then(data => {setBookData(data);console.log(bookData)});}
        getFlights()
        alert(JSON.stringify(bookData))

      }, []); */
    //alert(window.sessionStorage.getItem("bookingDetails"))
    
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay(flightAmount) {
        const price = queryData.price*100;
        console.log(price)
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
  
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
  
        const result = await axios.post(razorpayUrl+"/payment/orders",{"amount":price,"currency":"INR"});
  
        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
  
        const { amount, id: order_id, currency } = result.data.sub;
  
        const options = {
            key: "rzp_test_viDGDEqdmCJlAn", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Hermes Corp.",
            description: "Rent Booking",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    "orderCreationId": order_id,
                    "razorpayPaymentId": response.razorpay_payment_id,
                    "razorpayOrderId": response.razorpay_order_id,
                    "razorpaySignature": response.razorpay_signature,
                };
                const result = await axios.post(razorpayUrl+"/payment/verify", data);
                alert("Verifying your payment");
                if(result.data.status === "success"){

                    var postRequest = {"id":queryData.id}
                    console.log("Post Request"+JSON.stringify(postRequest))
                    axios.post(mongoUrl,postRequest).then(response =>{
                        //alert("Post Response"+JSON.stringify(response))
                        var postResponse = response.data[0];
                        //alert(JSON.stringify(postResponse.id))
                        console.log(JSON.stringify(postResponse.id))
                        var availNumber = postResponse.avail -1
                        //alert(availNumber)
                        console.log(availNumber)
                        var putRequest = {
                            "in":{"id":queryData.id},
                            "out":{
                                "avail":availNumber
                            }
                        }
                        //alert(JSON.stringify(putRequest))
                        console.log(JSON.stringify(putRequest))
                        var putResponse = axios.put(mongoUrl+"update",putRequest)
                        //alert(JSON.stringify(putResponse))

                        axios.post(mongoUrl+"booking",{"user":jwt_decode(window.sessionStorage.getItem("token")).user}).then(
                            response => {
                                //alert("booking"+JSON.stringify(response))
                                var bookingData = response.data[0]
                                //alert("bookingData:"+bookingData["booking"])
                                bookingData["booking"].push(queryData.id)
                                var bookArray = bookingData.booking


                                var updateUser = {
                                    "in":{
                                        "user":jwt_decode(window.sessionStorage.getItem("token")).user
                                    },
                                    "out":{
                                        "booking": bookArray
                                    }
                                }

                                var userUpdate =axios.put(mongoUrl+"users",updateUser)
                                //alert("User Update"+userUpdate)
                                console.log("User Update"+userUpdate)
                        })
                    })
                    alert("Your Ticket has been booked. Reciept will be sent to your mail soon.")
 
                    history.push("/")
                }
                if(result.data.status === "fail"){
                    alert("Payment Failed, try again in some time");
                    history.push("/")
                }
            },
            theme: {
                color: "#61dafb",
            },
        };
  
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return(

                <div className="bg-gray-900" style={{display:"flex",justifyContent:'center', alignItems:'center',fontFamily:"Roboto",fontSize:"20px",height:"100vh"}}>
                    <button onclick={displayRazorpay()}></button>
                    <a href="/" style={{justifyContent:'center', alignItems:'center',fontFamily:"Roboto",fontSize:"20px"}}>Return to Home Page</a>
                </div>
    )
        
}

export default Payment;
