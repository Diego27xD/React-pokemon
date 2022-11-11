import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MenuTypes = ({types, handleChange, type}) => {
  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel sx={{fontWeight:800, backgroundColor:"transparent"}}>Tipos</InputLabel>
        <Select value={type} label="Tipos" onChange={handleChange} sx={{backgroundColor:"white"}}>
          {types.length > 0 &&
            types.map(({ url, name }) => (
              <MenuItem value={url}>{name}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default MenuTypes