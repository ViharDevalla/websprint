import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';

const Rent = () => {
    const [company, setCompany] = React.useState('');
    const [model, setModel] = React.useState('');
    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    const [location,setLocation] = React.useState('');
    var history = useHistory()

    const handleChange = (event) => {
        console.log(company,model,from,to,location)
        
        window.sessionStorage.setItem("booking",[])
        var query = "?company="+company+"&model="+model+"&from="+from+"&to="+to+"&location="+location;
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
                <div className="bg-gray-400 p-5 ">
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
                    options={carCompany.map((option) => option.title)}
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
                <div  className="space-x-10">
                <TextField
                    id="date"
                    label="From"
                    type="date"
                    value={from} onChange={({target}) => setFrom(target.value)}

                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    id="date"
                    label="To"
                    type="date"
                    value={to} onChange={({target}) => setTo(target.value)}

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
                    options={carCompany.map((option) => option.title)}
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
    { title:"Tesla"},
    { title:"Ford" },
    {title:"Lamborgini"},
    { title:"Ferrari"}
]
const carModel = [
    {      
        title:"Tesla",
        model:["Model S","Model 3","Model X","Model Y"]
    },   
    { 
        title:"Ford",
        model:['Mustang']
    },
    {
        title:"Lamborgini",
        model:["Urus","Murcilago"]
    },
    { 
        title:"Porsche",
        model:["Taycan"]
    }
]
export default Rent
