import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';

const ZOHO = window.ZOHO;

function App() {
  const [initialized, setInitialized] = useState(false) //initializing widget
  const [entity, setEntity] = useState() //module entity 
  const [entityId, setEntityId] = useState() //module id

  const [contacts, setContacts] = useState([]) // gets populated by contacts

  const [disableFields, setDisableFields] = useState(true)  // textFields enabled?
  const [newContactCreated, setNewContactCreated] = useState(false)

  const [contactSelected, setContactSelected] = useState() //contact selected from autocomplete

  const [record, setRecord] = useState({
    contact: "",
    primaryContactFirstName: '',
    primaryContactLastName: '',
    primaryContactTitle: '',
    primaryContactEmail: '',
    primaryContactPhone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  })

  useEffect(() => {  //rendered once during widget first load
    ZOHO.embeddedApp.on("PageLoad", function (data) {
      setEntity(data?.Entity);
      setEntityId(data?.EntityId?.[0])
    });

    ZOHO.embeddedApp.init().then(() => {
      ZOHO.CRM.UI.Resize({height: "600", width:"1500"}).then(function(data){
        console.log(data);
      });
      setInitialized(true)
    });
  }, [])

  useEffect(() => {
    if(entity && entityId) {
      ZOHO.CRM.API.getRelatedRecords({Entity:entity,RecordID:entityId,RelatedList:"Contacts",page:1,per_page:200})
      .then(function(data){
          setContacts(data?.data);
          // setContactSelected(data?.data[5]);
      })
    }
  }, [entity, entityId, initialized])

  useEffect(() => {
    if(contactSelected !== null) {
      setRecord({
        primaryContactFirstName: contactSelected?.First_Name || "",
        primaryContactLastName: contactSelected?.Last_Name || "",
        primaryContactTitle: contactSelected?.Title || "", 
        primaryContactEmail: contactSelected?.Email || "",
        primaryContactPhone: contactSelected?.Phone || "",
        street: contactSelected?.Mailing_Street || "",
        city: contactSelected?.Mailing_City || "",
        state: contactSelected?.Mailing_State || "",
        zipCode: contactSelected?.Mailing_Zip || "",
        country: contactSelected?.Mailing_Country || ""
      })
    }
  }, [contactSelected])

  const handleCancel = () => {
    ZOHO.CRM.UI.Popup.close()
    .then(function(data){
        console.log(data)
    })
  }

  const handleAddContactClick = () => {
    setContactSelected();
    setDisableFields(!disableFields)
    setNewContactCreated(!newContactCreated)
    setRecord({
      contact: "",
      primaryContactFirstName: '',
      primaryContactLastName: '',
      primaryContactTitle: '',
      primaryContactEmail: '',
      primaryContactPhone: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    })
  }

  const handleSubmit = () => {
    if(!newContactCreated) {
      ZOHO.CRM.UI.Popup.close()
      .then(function(data){
          console.log(data)
      })
    }

    if (entity && entityId && newContactCreated) {
      var config={
        Entity: "Contacts",
        APIData:{
          First_Name: record?.primaryContactFirstName,
          Last_Name: record?.primaryContactLastName,
          Title: record?.primaryContactTitle,
          Email: record?.primaryContactEmail,
          Phone: record?.primaryContactPhone,
          Mailing_Street: record?.street,
          Mailing_City: record?.city,
          Mailing_State: record?.state,
          Mailing_Zip: record?.zipCode,
          Mailing_Country: record?.country,
          Account_Name: {
            id: entityId
          },
        },
        Trigger:["workflow"]
      }
      console.log(config)
      ZOHO.CRM.API.insertRecord(config)
      .then(function(data){
        if (data?.data?.[0]?.code === 'SUCCESS') {
          ZOHO.CRM.UI.Popup.closeReload()
          .then(function(data){
              console.log(data)
          })
        }
      })
    }
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
                  disabled={!disableFields}
                  id="contacts"
                  options={contacts}
                  getOptionLabel={option => option?.Full_Name || ""}
                  value={{Full_Name: contactSelected?.Full_Name || ""}}
                  sx={{ width: "100%" }}
                  onChange={(e, value) => {
                    setContactSelected(value)
                    if(value === null) {
                      setRecord({
                        contact: "",
                        primaryContactFirstName: '',
                        primaryContactLastName: '',
                        primaryContactTitle: '',
                        primaryContactEmail: '',
                        primaryContactPhone: '',
                        street: '',
                        city: '',
                        state: '',
                        zipCode: '',
                        country: ''
                      })
                    }
                  }}
                  renderInput={(params) => <TextField {...params} sx={{ backgroundColor: `${!disableFields ? '#F1EEE9': 'transparent'}` }} />}
                />
              </Box>
          </Box>

          <InputBox
            label="primaryContactFirstName"
            labelContent="Primary Contact First Name"
            disableFields={disableFields}
            value={record.primaryContactFirstName}
            onChange={(e) => setRecord((prevValue) => ({...prevValue, primaryContactFirstName: e.target.value}))}
          />

          <InputBox
            label="primaryContactTitle"
            labelContent="Primary Contact Title"
            disableFields={disableFields}
            value={record.primaryContactTitle}
            onChange={(e) => setRecord((prevValue) => ({...prevValue, primaryContactTitle: e.target.value}))}
          />

          <InputBox
            label="primaryContactPhone"
            labelContent="Primary Contact Phone"
            disableFields={disableFields}
            value={record.primaryContactPhone}
            onChange={(e) => setRecord((prevValue) => ({...prevValue, primaryContactPhone: e.target.value}))}
          />

          <InputBox
            label="city"
            labelContent="City"
            disableFields={disableFields}
            value={record.city}
            onChange={(e) => setRecord((prevValue) => ({...prevValue, city: e.target.value}))}
          />

          <InputBox
            label="zipCode"
            labelContent="Zip Code"
            disableFields={disableFields}
            value={record.zipCode}
            onChange={(e) => setRecord((prevValue) => ({...prevValue, zipCode: e.target.value}))}
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
              disabled={newContactCreated}
            >
              Add New Contact
            </Button>
          </Box>

          <InputBox
            label="primaryContactLastName"
            labelContent={`Primary Contact Last Name ${newContactCreated? "*" : ''}`}
            disableFields={disableFields}
            value={record.primaryContactLastName}
            onChange={(e) => setRecord((prevValue) => ({...prevValue, primaryContactLastName: e.target.value}))}
            placeholder='This field is mandatory!'
          />

          <InputBox
            label="primaryContactEmail"
            labelContent="Primary Contact Email"
            disableFields={disableFields}
            value={record.primaryContactEmail}
            onChange={(e) => setRecord((prevValue) => ({...prevValue, primaryContactEmail: e.target.value}))}
          />

          <InputBox
            label="street"
            labelContent="Street"
            disableFields={disableFields}
            value={record.street}
            onChange={(e) => setRecord((prevValue) => ({...prevValue, street: e.target.value}))}
          />

          <InputBox
            label="state"
            labelContent="State"
            disableFields={disableFields}
            value={record.state}
            onChange={(e) => setRecord((prevValue) => ({...prevValue, state: e.target.value}))}
          />

          <InputBox
            label="country"
            labelContent="Country"
            disableFields={disableFields}
            value={record.country}
            onChange={(e) => setRecord((prevValue) => ({...prevValue, country: e.target.value}))}
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
          <Button variant='outlined' onClick={handleCancel}>Cancel</Button>
          <Button variant='contained' 
            onClick={handleSubmit}
            >Save</Button>
        </Box>
    </div>
  );
}

export default App;