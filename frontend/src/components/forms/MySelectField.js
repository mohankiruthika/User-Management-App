import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Controller} from 'react-hook-form';
import FormHelperText from '@mui/material/FormHelperText';

export default function MyselectField(props) {
  const [role, setRole] = React.useState('');
  const {label, name, control, width} = props

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
      
      <Controller
      name = {name}
      control = {control}
      render = {({
        field:{onChange, value},
        fieldState:{error},
        formState,

      }) => (
        <FormControl variant="standard" sx={{width:{width}}}>
        <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={value}
        onChange={onChange}
        error={!!error}>
        <MenuItem value="">
        </MenuItem>
        <MenuItem value={"developer"}>Developer</MenuItem>
        <MenuItem value={"tester"}>Tester</MenuItem>
        <MenuItem value={"ba"}>Business Analyst</MenuItem>
      </Select>
      <FormHelperText sx={{color:"#d32f2f"}}>{error?.message}</FormHelperText>
      </FormControl>
      )}/>
        
        
      
  );
}