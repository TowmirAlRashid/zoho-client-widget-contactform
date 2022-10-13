import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';

const ZOHO = window.ZOHO;

function App() {
  const [initialized, setInitialized] = useState(false) //initializing widget
  const [entity, setEntity] = useState() //module entity 
  const [entityId, setEntityId] = useState() //module id

  const [disableFields, setDisableFields] = useState(true)  // textFields enabled?

  useEffect(() => {  //rendered once during widget first load
    ZOHO.embeddedApp.on("PageLoad", function (data) {
      setEntity(data?.Entity);
      setEntityId(data?.EntityId?.[0])
    });

    ZOHO.embeddedApp.init().then(() => {
      ZOHO.CRM.UI.Resize({height: "600", width:"1000"}).then(function(data){
        console.log(data);
      });
      setInitialized(true)
    });
  }, [])

  const contacts = [ "contact 1", "contact 2" ]

  const handleAddContactClick = () => {
    setDisableFields(!disableFields)
  }

  return (
    <div>
      <Box
        component="form"
        noValidate
        sx={{
          width: "100%",
          m: "2rem 0 1.5rem 1.5rem",
          display: "flex",
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
                  disabled={disableFields}
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
                  disabled={disableFields}
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
                  disabled={disableFields}
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
                  disabled={disableFields}
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
                disabled={disableFields}
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
                type='text'
                disabled={disableFields}
              />
            </Box>
          </Box>
        </Box>

        {/* right side */}
        <Box sx={{ width: "50%", m: "1rem 2rem"}}>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            m: "0 auto 1.5rem",
          }}>
            <Button
              variant='outlined'
              sx={{ mr: "5%"}}
              onClick={handleAddContactClick}
            >
              Add New Contact
            </Button>
          </Box>

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
                disabled={disableFields}
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
                disabled={disableFields}
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
                disabled={disableFields}
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
                disabled={disableFields}
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
                disabled={disableFields}
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