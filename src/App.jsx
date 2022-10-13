
import { Autocomplete, Box, Button, TextField } from '@mui/material';
import './App.css';

function App() {
  const contacts = [ "contact 1", "contact 2" ]
  return (
    <div>
      <Box
        sx={{ 
          m: "2rem auto 0",
          width: "92%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant='outlined'
        >
          Add New Contact
        </Button>
      </Box>

      <Box
        component="form"
        noValidate
        sx={{
          width: "100%",
          m: "1.5rem auto 1.5rem",
          display: "flex",
          // alignItems: "center"
        }}
      >
        {/* left side */}
        <Box sx={{ width: "50%", m: "1rem 2rem" }}>       
          <Box sx={{
              display: "flex",
              alignItems: "center",
              m: "0 auto 1.5rem"
            }}>
              <Box sx={{ width: "30%", fontSize: "18px" }}>
                <label htmlFor="contacts">Contacts</label>
              </Box>
              <Box sx={{ width: "65%"}}>
                <Autocomplete
                  disablePortal
                  id="contacts"
                  options={contacts}
                  sx={{ width: "100%" }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
          </Box>

          <Box sx={{
              display: "flex",
              alignItems: "center",
              m: "0 auto 1.5rem"
            }}>
              <Box sx={{ width: "30%", fontSize: "18px" }}>
                <label htmlFor="primaryContactFirstName">Primary Contact First Name</label>
              </Box>
              <Box sx={{ width: "65%"}}>
                <TextField
                  sx={{ width: "100%" }}
                  id='primaryContactFirstName'
                />
              </Box>
          </Box>

          <Box sx={{
              display: "flex",
              alignItems: "center",
              m: "0 auto 1.5rem"
            }}>
              <Box sx={{ width: "30%", fontSize: "18px" }}>
                <label htmlFor="primaryContactTitle">Primary Contact Title</label>
              </Box>
              <Box sx={{ width: "65%"}}>
                <TextField
                  sx={{ width: "100%" }}
                  id='primaryContactTitle'
                />
              </Box>
          </Box>

          <Box sx={{
              display: "flex",
              alignItems: "center",
              m: "0 auto 1.5rem"
            }}>
              <Box sx={{ width: "30%", fontSize: "18px" }}>
                <label htmlFor="primaryContactPhone">Primary Contact Phone</label>
              </Box>
              <Box sx={{ width: "65%"}}>
                <TextField
                  sx={{ width: "100%" }}
                  id='primaryContactPhone'
                  type='tel'
                />
              </Box>
          </Box>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            m: "0 auto 1.5rem"
          }}>
            <Box sx={{ width: "30%", fontSize: "18px" }}>
              <label htmlFor="city">City</label>
            </Box>
            <Box sx={{ width: "65%"}}>
              <TextField
                sx={{ width: "100%" }}
                id='city'
              />
            </Box>
          </Box>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            m: "0 auto 1.5rem"
          }}>
            <Box sx={{ width: "30%", fontSize: "18px" }}>
              <label htmlFor="zipCode">Zip Code</label>
            </Box>
            <Box sx={{ width: "65%"}}>
              <TextField
                sx={{ width: "100%" }}
                id='zipCode'
                type='number'
              />
            </Box>
          </Box>
        </Box>

        {/* right side */}
        <Box sx={{ width: "50%", m: "1rem 2rem"}}>
          {/* <Box sx={{
            display: "flex",
            alignItems: "center",
            m: "0 auto 1.5rem",
          }}>
            <Box sx={{ width: "30%", fontSize: "18px" }}>
              <label>Add New Contact</label>
            </Box>
            <Button
              variant='outlined'
            >
              Add New Contact
            </Button>
          </Box> */}

          <Box sx={{
            display: "flex",
            alignItems: "center",
            m: "0 auto 1.5rem"
          }}>
            <Box sx={{ width: "30%", fontSize: "18px" }}>
              <label htmlFor="primaryContactLastName">Primary Contact Last Name</label>
            </Box>
            <Box sx={{ width: "65%"}}>
              <TextField
                sx={{ width: "100%" }}
                id='primaryContactLastName'
              />
            </Box>
          </Box>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            m: "0 auto 1.5rem"
          }}>
            <Box sx={{ width: "30%", fontSize: "18px" }}>
              <label htmlFor="primaryContactEmail">Primary Contact Email</label>
            </Box>
            <Box sx={{ width: "65%"}}>
              <TextField
                sx={{ width: "100%" }}
                id='primaryContactEmail'
                type='email'
              />
            </Box>
          </Box>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            m: "0 auto 1.5rem"
          }}>
            <Box sx={{ width: "30%", fontSize: "18px" }}>
              <label htmlFor="street">Street</label>
            </Box>
            <Box sx={{ width: "65%"}}>
              <TextField
                sx={{ width: "100%" }}
                id='street'
              />
            </Box>
          </Box>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            m: "0 auto 1.5rem"
          }}>
            <Box sx={{ width: "30%", fontSize: "18px" }}>
              <label htmlFor="state">State</label>
            </Box>
            <Box sx={{ width: "65%"}}>
              <TextField
                sx={{ width: "100%" }}
                id='state'
              />
            </Box>
          </Box>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            m: "0 auto 1.5rem"
          }}>
            <Box sx={{ width: "30%", fontSize: "18px" }}>
              <label htmlFor="country">Country</label>
            </Box>
            <Box sx={{ width: "65%"}}>
              <TextField
                sx={{ width: "100%" }}
                id='country'
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          m: "2rem -4rem",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          gap: '1rem'
        }}
      >
        <Button variant='outlined'>Cancel</Button>
        <Button variant='contained'>Save</Button>
      </Box>
    </div>
  );
}

export default App;