import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';

const Rent = () => {
    const [company, setCompany] = React.useState('');
    const [model, setModel] = React.useState('');
    const [date, setDate] = React.useState('');
    const [location,setLocation] = React.useState('');
    var history = useHistory()

    const handleChange = (event) => {
        console.log(company,model,location)
        
        window.localStorage.setItem("booking",[])
        var query = "?company="+company+"&model="+model+"&date="+date+"&location="+location;
        history.push({pathname:"/search",search:query})
      };

    const useStyles = makeStyles({
        root: {
          width: 100,
          padding: '0 30px',
        },
      });
    const classes = useStyles();
    return (
        <div className="rentback h-screen bg-cover">
            
            <div className="w-1/3 px-10 py-20 h-full flex-box"  >
                <div className="bg-gray-400 p-10 mt-24">
                <h1 className="text-4xl text-center">Rent A Car</h1>
                <Autocomplete
                    className={classes.root}
                    freeSolo
                    className="w-full"
                    id="free-solo-2-demo"
                    disableClearable
                    options={carCompany.map((option) => option.title)}
                    inputValue={company}
                    onChange={(e,v)=>setCompany(v)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Car Company"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                    )}
                />
                <Autocomplete
                className={classes.root}
                    freeSolo
                    className="w-full"
                    id="free-solo-2-demo"
                    disableClearable
                    options={carModel.map((option) => option.model)}
                    inputValue={model}
                    onChange={(e,v)=>setModel(v)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Car Model"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                    )}
                />
                <div  className="w-full">
                <TextField
                    id="date"
                    label="Date"
                    type="date"
                    value={date} onChange={({target}) => setDate(target.value)}
                    style={{width: '100%'}}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                
                </div>
                <Autocomplete
                className={classes.root}
                    freeSolo
                    className="w-full"
                    id="free-solo-2-demo"
                    disableClearable
                    options={locationList.map((option) => option.city)}
                    inputValue={location}
                    onChange={(e,v)=>setLocation(v)}

                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Location"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                    )}
                />
                <br/>
                <Button className="w-full" variant="contained" color="secondary" onClick={() => handleChange()}>Submit</Button>
                
                </div>

            </div>
        </div>
    )
}

const carCompany = [
    {      
        title:"Tesla Corporation",
    },   
    { 
        title:"Ford",
    },
    {
        title:"Lamborgini",
    },
    { 
        title:"Porsche",
    }
]
const carModel = [
    {
        model:"Model S"
    },
    {
        model:"Model 3"
    },
    {
        model:"Model X"
    },
    {
        model:"Model Y"
    },
    {
        model:"Urus"
    },
    {
        model:"F8"
    },
    {
        model:"GT Sport"
    },
    {
        model:"Taycan"
    }
]

const locationList = [
    {city:"Bangalore"},{city:"Mumbai"},{city:"Chennai"},{city:"Delhi"}
]
export default Rent
