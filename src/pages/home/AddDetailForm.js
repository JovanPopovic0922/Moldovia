import React, { useEffect, useRef, useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, Grid, styled, Divider } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { children, genders, countries, maritalStates, studies } from "../../constants/constants";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab"
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import AppContext from "../../context/AppContext";

const Input = styled('input')({
    display: 'none',
});

export default function AddDetailForm(){

    const GlobalSetting = useContext(AppContext);

    const [gender, setGender] =  useState('male');
    const [birthCountry, setBirthCountry] =  useState('');
    const [livingCountry, setLivingCountry] =  useState('');
    const [passportCountry, setPassportCountry] =  useState('');
    const [maritalState, setMaritalState] =  useState('');
    const [study, setStudy] =  useState('');
    const [child, setChild] =  useState('0');

    const [birthDate, setBirthDate] =  useState(new Date('2011-01-01'));
    const [passportExpDate, setPassportExpDate] =  useState(new Date('2011-01-01'));
    const [passportIssueDate, setPassportIssueDate] =  useState(new Date('2011-01-01'));
    // const [Date, setBirthDate] =  useState('');
    const [avatar, setAvatar] =  useState();
    const [preview, setPreview] =  useState();

    // Marital State, Children
    const maritalStateCalledOnce = useRef(false);
    const hasChildrenSateCalledOnce = useRef(false);

    useEffect(() =>{
        if(maritalStateCalledOnce.current){
            return;
        }
        maritalStateCalledOnce.current = true;
    }, [GlobalSetting.isMarried]);

    useEffect(() =>{
        if(hasChildrenSateCalledOnce.current){
            return;
        }
        hasChildrenSateCalledOnce.current = true;
    }, [GlobalSetting.hasChildren]);

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
        if(event.target.value === 'married'){
            GlobalSetting.setIsMarried(true);
        }
    }

    const handleStudy = (event) => {
        setStudy(event.target.value);
       
    }

    const handleChildren = (event) => {
        setChild(event.target.value);
        GlobalSetting.setHasChildren(event.target.value);
        console.log(GlobalSetting.hasChildren);
    }

    const handleBirthDate = (newValue) => {
        setBirthDate(newValue);
    }

    const handlePassportExpDate = (newValue) => {
        setPassportExpDate(newValue);
    }

    const handlePassportIssueDate = (newValue) => {
        setPassportIssueDate(newValue);
    }

    const handleAvatarImage = (event) => {
        setAvatar(event.target.files[0]);
        console.log(event.target.files[0]);
    }

    const addDetails = () => {
        console.log('Hello I am Add Details');
    }


    useEffect(() => {
        if(!avatar){
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(avatar)
        setPreview(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(avatar)
    }, [avatar])

    return(
        <>
            <Grid container justifyContent={'flex-start'} marginTop={"20px"} paddingBottom = {'30px'} borderBottom ={'1px solid #1976d2'} rowSpacing={1} columnSpacing={2} >
                <Grid item xs={2} justifyContent={'center'}>
                   <Avatar 
                        alt="Remy Sharp"
                        src={preview}
                        sx ={{width:180, height:180}}
                        style = {{marinLeft:'5px '}}
                    />
                    <Button variant="contained" style={{marginTop:"20px", marginLeft:"50px"}} component="label" >
                        Upload
                       <input type={'file'}  onChange={handleAvatarImage} hidden></input>
                   </Button>
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
                        <LocalizationProvider    dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Birth Date"
                                inputFormat="MM-dd-yyyy"
                                value={birthDate}
                                onChange={handleBirthDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
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
                            label="Living Country"
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
                   
                        {/* Passport ExpDate  */}
                        <LocalizationProvider    dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Passport ExpDate"
                                inputFormat="MM-dd-yyyy"
                                value={passportExpDate}
                                onChange={handlePassportExpDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} className="input-column">
                        {/* Passport IssueDate  */}
                        <LocalizationProvider    dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Passport ExpDate"
                                inputFormat="MM-dd-yyyy"
                                value={passportIssueDate}
                                onChange={handlePassportIssueDate}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
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
                    <Button onClick={addDetails} variant="contained">Submit</Button>
                </Grid>
           </Grid>
        </>
        
    )
}