import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';

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

          <InputBox
            label="primaryContactFirstName"
            labelContent="Primary Contact First Name"
            disableFields={disableFields}
          />

          <InputBox
            label="primaryContactTitle"
            labelContent="Primary Contact Title"
            disableFields={disableFields}
          />

          <InputBox
            label="primaryContactPhone"
            labelContent="Primary Contact Phone"
            disableFields={disableFields}
          />

          <InputBox
            label="city"
            labelContent="City"
            disableFields={disableFields}
          />

          <InputBox
            label="zipCode"
            labelContent="Zip Code"
            disableFields={disableFields}
          />
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

          <InputBox
            label="primaryContactLastName"
            labelContent="Primary Contact Last Name"
            disableFields={disableFields}
          />

          <InputBox
            label="primaryContactEmail"
            labelContent="Primary Contact Email"
            disableFields={disableFields}
          />

          <InputBox
            label="street"
            labelContent="Street"
            disableFields={disableFields}
          />

          <InputBox
            label="state"
            labelContent="State"
            disableFields={disableFields}
          />

          <InputBox
            label="country"
            labelContent="Country"
            disableFields={disableFields}
          />
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