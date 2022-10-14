import { Box, TextField } from '@mui/material'
import React from 'react'

const InputBox = ({ label, labelContent, disableFields }) => {
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
            sx={{ width: "100%" }}
            id={label}
          />
        </Box>
    </Box>
  )
}

export default InputBox