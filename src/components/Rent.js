import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Rent = () => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return (
        <div className="rentback h-screen bg-cover">
            <div className="w-1/3 px-10 py-20 h-full flex-box"  >
                <div className="bg-gray-500 p-5 w-1/2">
                <FormControl>
                <Autocomplete
                    freeSolo
                    className="w-full"
                    id="free-solo-2-demo"
                    disableClearable
                    options={carCompany.map((option) => option.title)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                    )}
                />
                {/* <InputLabel id="demo-simple-select-label" >From </InputLabel>
                    <Select className="w-20" labelId="demo-simple-select-label" id="demo-simple-select" value={age} onChange={handleChange}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select> */}
                </FormControl>
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
export default Rent
