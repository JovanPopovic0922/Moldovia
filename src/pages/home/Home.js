import React from "react";
import Layout from "../../layouts/Layout";
import { children, genders, countries, maritalStates, studies } from "../../constants/constants";
import AddDetailForm from "./AddDetailForm";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, Grid } from "@mui/material";
import Avatar from '@mui/material/Avatar';

export default function Home(){

    const [gender, setGender] = React.useState('male');
    const [birthCountry, setBirthCountry] = React.useState('');
    const [livingCountry, setLivingCountry] = React.useState('');
    const [passportCountry, setPassportCountry] = React.useState('');
    const [maritalState, setMaritalState] = React.useState('');
    const [study, setStudy] = React.useState('');
    const [child, setChild] = React.useState('0');

    const handleGender = (event) => {
        setGender(event.target.value);
    }

    const handleBirthCountry = (event) => {
        setBirthCountry(event.target.value);
    }

    const handleLivingCountry = (event) => {
        setLivingCountry(event.target.value);
    }

    const handlePassportCountry = (event) => {
        setPassportCountry(event.target.value);
    }

    const handleMaritalState = (event) => {
        setMaritalState(event.target.value);
    }

    const handleStudy = (event) => {
        setStudy(event.target.value);
    }

    const handleChildren = (event) => {
        setChild(event.target.value);
    }

   return(
       <Layout>
           <Grid container justifyContent={'flex-start'} marginTop={"20px"} rowSpacing={1} columnSpacing={2} >
                <Grid item xs={2} spacing={2}>
                   <Avatar
                        alt="Remy Sharp"
                        src="/images/1.jpg"
                       sx ={{width:180, height:180}}
                    />
                </Grid>
                <Grid  item xs={8} >
                   <Grid container gap={'10px'} >
                    <Grid  item xs={12} className="input-column">
                            {/* first name */}
                            <TextField
                            required
                            id="outlined-required"
                            label="First Name"
                            defaultValue=""
                            />
                            {/* last name */}
                            <TextField
                            required
                            id="outlined-required"
                            label="Last Name"
                            defaultValue=""
                            />
                            {/* gender */}
                            <TextField
                            id="outlined-select-currency"
                            select
                            label="Gender"
                            value={gender}
                            style={{width:'178px', height:'20px'}}
                            onChange={handleGender}
                            >
                            {genders.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                            </TextField>
                            {/* Participation */}
                            <TextField
                            required
                            id="outlined-required"
                            label="participation"
                            defaultValue=""
                            />
                    </Grid>
                    <Grid item xs={12} className="input-column" >
                            {/* Birth date */}
                            <TextField
                            required
                            id="outlined-required"
                            label="Birth date"
                            defaultValue=""
                            />
                            {/* Birth Month */}
                            <TextField
                            required
                            id="outlined-required"
                            label="Birth Month"
                            defaultValue=""
                            />
                            {/* Birth Year */}
                            <TextField
                            required
                            id="outlined-required"
                            label="Birth Year"
                            defaultValue=""
                            />
                            {/* Birth Time */}
                            <TextField
                                required
                                id="outlined-required"
                                label="Birth Time"
                                defaultValue=""
                            />
                    </Grid>
                    <Grid item xs={12} className="input-column" >
                        {/* Birth city */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Birth City"
                            defaultValue=""
                        />
                        {/* Birth District */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Birth District"
                            defaultValue=""
                        />
                        {/* Birth Country */}
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Birth Country"
                            style={{width:'178px', height:'20px'}}
                            value={birthCountry}
                            onChange={handleBirthCountry}
                            >
                            {countries.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>  
                    <Grid item xs={12} className="input-column">
                        {/* Living Address */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Living Address"
                            defaultValue=""
                        />
                        {/* Living City */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Living City"
                            defaultValue=""
                        />
                        {/* Living District */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Living District"
                            defaultValue=""
                        />
                        {/* Living Country */}
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Birth Country"
                            style={{width:'178px', height:'20px'}}
                            value={livingCountry}
                            onChange={handleLivingCountry}
                            >
                            {countries.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} className="input-column">
                    {/* Email  */}
                        <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                defaultValue=""
                            />
                            {/* Phone1  */}
                        <TextField
                                required
                                id="outlined-required"
                                label="Phone1"
                                defaultValue=""
                            />
                            {/* Phone2  */}
                        <TextField
                                required
                                id="outlined-required"
                                label="Phone2"
                                defaultValue=""
                            />
                            {/* Phone3  */}
                        <TextField
                                required
                                id="outlined-required"
                                label="Phone3"
                                defaultValue=""
                            />
                    </Grid>   
                    <Grid item xs={12}  className="input-column">
                    {/* Passport number  */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Passport Number"
                            defaultValue=""
                        />
                        {/* passport country */}
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Passport Country"
                            style={{width:'178px', height:'20px'}}
                            value={passportCountry}
                            onChange={handlePassportCountry}
                            >
                            {countries.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>

                        {/* Passport Authority  */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Passport Authority"
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={12} className="input-column">
                    {/* Passport ExpDate  */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Passport ExpDate"
                            defaultValue=""
                        />
                        {/* Passport ExpMonth  */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Passport ExpMonth"
                            defaultValue=""
                        />
                        {/* Passport ExpYear  */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Passport ExpYear"
                            defaultValue=""
                        />
                        {/* Passport ExpTime  */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Passport ExpTime"
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={12} className="input-column">
                        {/* Passport IssueDate  */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Passport IssueDate"
                            defaultValue=""
                        />
                        {/* Passport IssueMonth  */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Passport IssueMonth"
                            defaultValue=""
                        />
                        {/* Passport IssueYear  */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Passport IssueYear"
                            defaultValue=""
                        />
                        {/* Passport IssueTime  */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Passport IssueTime"
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={12} className="input-column">
                        {/* Marital Status */}
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Marital Status"
                            style={{width:'178px', height:'20px'}}
                            value={maritalState}
                            onChange={handleMaritalState}
                            >
                            {maritalStates.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        {/* Study */}
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Study"
                            value={study}
                            style={{width:'178px', height:'20px'}}
                            onChange={handleStudy}
                            >
                            {studies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        {/* Children */}
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Children"
                            value={child}
                            style={{width:'178px', height:'20px'}}
                            onChange={handleChildren}
                            >
                            {children.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                   </Grid> 
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained">Submit</Button>
                </Grid>
           </Grid>
       </Layout>
   )
}