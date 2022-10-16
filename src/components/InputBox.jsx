import { Box, TextField } from '@mui/material'
import React from 'react'

// this component creates a label and a textfield with necessary css
const InputBox = ({ label, labelContent, disableFields, value, onChange, placeholder }) => {
  return (
    <Box sx={{
        display: "flex",
        alignItems: "center",
        m: "0 auto 1.5rem"
      }}>
        <Box sx={{ width: "30%", fontSize: "18px" }}>
          <label htmlFor={label}>{labelContent}</label>
        </Box>
        <Box sx={{ width: "65%"}}>
          <TextField
            disabled={disableFields}
            value={value}
            sx={{ width: "100%", backgroundColor: `${disableFields ? '#F1EEE9': 'transparent'}` }}
            id={label}
            onChange={onChange}
            placeholder={placeholder}
          />
        </Box>
    </Box>
  )
}

export default InputBox