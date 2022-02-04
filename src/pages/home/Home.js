import React from "react";
import Layout from "../../layouts/Layout";
import AddDetailForm from "./AddDetailForm";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, Grid } from "@mui/material";
import Avatar from '@mui/material/Avatar';

const genders = [
    {
      value: 'male',
    },
    {
      value: 'female',
    },
];

const countries = [
    {
      value: 'Afghanistan',
    },
    {
      value: 'Albania',
    },
    {
        value: 'Algeria',
      },
      {
        value: 'American Samoa',
      },
      {
        value: 'Andorra',
      },
      {
        value: 'Angola',
      },
      {
        value: 'Anguilla',
      },
      {
        value: 'Antigua and Barbuda',
      },
      {
        value: 'Argentina',
      },
      {
        value: 'Armenia',
      },
      {
        value: 'Aruba',
      },
      {
        value: 'Australia',
      },
      {
        value: 'Austria',
      },
      {
        value: 'Azerbaijan',
      },
      {
        value: 'Bahamas',
      },
      {
        value: 'Bahrain',
      },
      {
        value: 'Baker Island',
      },
      {
        value: 'Bangladesh',
      },
      {
        value: 'Barbados',
      },
      {
        value: 'Belarus',
      },
      {
        value: 'Bhutan',
      },
      {
        value: 'Bolivia',
      },
      {
        value: 'Bonaire',
      },
      {
        value: 'Bosnia and Herzegovina',
      },
      {
        value: 'Botswana',
      },
      {
        value: 'Brazil',
      },
       {
        value: 'British Indian Ocean Territory',
      },
       {
        value: 'British Virgin Islands',
      },
      {
        value: 'Brunei',
      },
      {
        value: 'Bulgaria',
      },
      {
        value: 'Burkina Faso',
      },
      {
        value: 'Burma',
      },
      {
        value: 'Burundi',
      },
      {
        value: 'Cabo Verde',
      },
      {
        value: 'Cambodia',
      },
      {
        value: 'Cameroon',
      },
      {
        value: 'Canada',
      },
      {
        value: 'Cayman Islands',
      },
      {
        value: 'Central African Republic',
      },
      {
        value: 'Chad',
      },
      {
        value: 'Chile',
      },
      {
        value: 'China, Peoples Republic o',
      },
      {
        value: 'Christmas Island',
      },
      {
        value: 'Cocos Keeling Islands',
      }, {
        value: 'Congo-Brazzaville',
      },
      {
        value: 'Congo-Kinshasa',
      },
      {
        value: 'Cook Islands',
      },
      {
        value: 'Costa Rica',
      },
      {
        value: "Cote d'Ivoire",
      },
      {
        value: 'Croatia',
      },
      {
        value: 'Cuba',
      },
      {
        value: 'Curacao',
      },
      {
        value: 'Cyprus',
      },
      {
        value: 'Czech Republic',
      },
      {
        value: 'Denmark',
      },
      {
        value: 'Djibouti',
      },
      {
        value: 'Dominica',
      },
      {
        value: 'Dominican Republic',
      },
      {
        value: 'Ecuador',
      },
      {
        value: 'Egypt',
      },
      {
        value: 'El Salvador',
      },
      {
        value: 'Equatorial Guinea',
      },
    
      {
        value: 'Eritrea',
      },
      {
        value: 'Estonia',
      },
      {
        value: 'Eswatini',
      },
      {
        value: 'Ethiopia',
      },
      {
        value: 'Falkland Islands',
      },
      {
        value: 'Faroe Islands',
      },
      {
        value: 'Federated States of Micronesia',
      },
      {
        value: 'Fiji',
      },
      {
        value: 'Finland',
      },
      {
        value: 'France',
      },
      {
        value: 'French Guiana',
      },  
      {
        value: 'French Polynesia',
      },
      {
        value: 'French Southern and Antarctic Lands',
      },
      {
        value: 'Gabon',
      }, 
      {
        value: 'Gaza Strip',
      },
      {
        value: 'Georgia',
      },
      {
        value: 'Germany',
      },

      {
        value: 'Ghana',
      },
      {
        value: 'Gibraltar',
      },
      {
        value: 'Greece',
      },
      {
        value: 'Greenland',
      },
      {
        value: 'Grenada',
      },
      {
        value: 'Guadeloupe',
      },
      {
        value: 'Guam',
      },
      {
        value: 'Guatemala',
      },
      {
        value: 'Guernsey',
      },
      {
        value: 'Guinea',
      },
      {
        value: 'Guinea - Bissau',
      },
      {
        value: 'Guyana',
      },
      {
        value: 'Haiti',
      },
      {
        value: 'Honduras',
      },
      {
        value: 'Hong Kong S. A. R.',
      },
      {
        value: 'Howland Island',
      },
      {
        value: 'Hungary',
      },
      {
        value: 'Iceland',
      },
      {
        value: 'India',
      },
      {
        value: 'Indonesia',
      },
      {
        value: 'Iran',
      },
      {
        value: 'Iraq',
      },
      {
        value: 'Ireland',
      },
      {
        value: 'Isle of Man',
      },
      {
        value: 'Israel',
      },
      {
        value: 'Italy',
      },
      {
        value: 'Jamaica',
      },
      {
        value: 'Japan',
      },
      {
        value: 'Johnston Atoll',
      },
      {
        value: 'Jordan',
      },
      {
        value: 'Kazakhstan',
      },
      {
        value: 'Kenya',
      },
      {
        value: 'Kiribati',
      },
      {
        value: 'Korea, North',
      },
      {
        value: 'Korea, South',
      },
      {
        value: 'Kosovo',
      },
      {
        value: 'Kuwait',
      },
      {
        value: 'Kyrgyzstan',
      },
      {
        value: 'Laos',
      },
      {
        value: 'Latvia',
      },
      {
        value: 'Lebanon',
      },
      {
        value: 'Lesotho',
      },
      {
        value: 'Liberia',
      },
      {
        value: 'Libya',
      },
      {
        value: 'Liechtenstein',
      },
      {
        value: 'Lithuania',
      },
      {
        value: 'Luxembourg',
      },
      {
        value: 'Macau',
      },
      {
        value: 'Madagascar',
      },
      {
        value: 'Malawi',
      }, 
      {
        value: 'Malaysia',
      },
      {
        value: 'Maldives',
      },
      {
        value: 'Marshall Islands',
      },
      {
        value: 'Martinique',
      },

      {
        value: 'Mauritania',
      },
      {
        value: 'Mauritius',
      },
      {
        value: 'Mayotte',
      },
      {
        value: 'Mexico',
      },
       {
        value: 'Midway Islands',
      },
       {
        value: 'Moldova',
      },
       {
        value: 'Monaco',
      },
      {
        value: 'Mongolia',
      },
      {
        value: 'Montenegro',
      },
      {
        value: 'Montserrat',
      }, 
      {
        value: 'Morocco',
      },
      {
        value: 'Mozambique',
      },
      {
        value: 'Namibia',
      },
      {
        value: 'Nauru',
      },
      {
        value: 'Nepal',
      },
      {
        value: 'Malta',
      },
      {
        value: 'Netherlands',
      },
      {
        value: 'New Caledonia',
      },
      {
        value: 'New Zealand',
      },
      {
        value: 'Nicaragua',
      },

      {
        value: 'Niger',
      },
      {
        value: 'Niue',
      },
      {
        value: 'Norfolk Island',
      },
      {
        value: 'North Macedonia',
      },
      {
        value: 'Northern Ireland',
      },
      {
        value: 'Northern Mariana Islands (USA)',
      },
      {
        value: 'Norway',
      },
      {
        value: 'Oman',
      },
      {
        value: 'Pakistan',
      },
      {
        value: 'Palau',
      },
      {
        value: 'Palmyra Atoll',
      },

      {
        value: 'Panama',
      },
      {
        value: 'Papua New Guinea',
      },
      {
        value: 'Paraguay',
      },
      {
        value: 'Philippines',
      },
      {
        value: 'Pitcairn Islands',
      },

      {
        value: 'Poland',
      },
      {
        value: 'Portugal',
      },

      {
        value: 'Puerto Rico',
      },
      {
        value: 'Qatar',
      },

      {
        value: 'Reunion',
      },
      {
        value: 'Romania',
      },

      {
        value: 'Rwanda',
      },
      {
        value: 'Saba',
      },

      {
        value: 'Saint Martin',
      },
      {
        value: 'Samoa',
      },
      {
        value: 'San Marino',
      },
      {
        value: 'Sao Tome and Principe',
      },
      {
        value: 'Saudi Arabia',
      },
      {
        value: 'Senegal',
      },
      {
        value: 'Serbia',
      },
      {
        value: 'Seychelles',
      },
      {
        value: 'Sierra Leone',
      },

       {
        value: 'Singapore',
      },
      {
        value: 'Sint Maarten',
      },
      {
        value: 'Slovakia',
      },
      {
        value: 'Slovenia',
      },
      {
        value: 'Solomon Islands',
      },

       {
        value: 'Somalia',
      },
      {
        value: 'South Africa',
      },
      {
        value: 'South Georgia and the South Sandwich Island',
      },
      {
        value: 'South Sudan',
      },
      {
        value: 'Spain',
      },
      {
        value: 'Sri Lanka',
      },
      {
        value: 'St. Barthelemy',
      },
      {
        value: 'St. Eustatius',
      },
      {
        value: 'St. Helena',
      },
      {
        value: 'St. Kitts and Nevis',
      },
      {
        value: 'St. Lucia',
      },
      {
        value: 'St. Pierre and Miquelon',
      },
      {
        value: 'St. Vincent and the Grenadines',
      },
      {
        value: 'Sudan',
      },
      {
        value: 'Suriname',
      },
      {
        value: 'Svalbard',
      },

      {
        value: 'Sweden',
      },
      {
        value: 'Switzerland',
      },
      {
        value: 'Syria',
      },
      {
        value: 'Taiwan',
      },
      {
        value: 'Tajikistan',
      },
      {
        value: 'Tanzania',
      },
      {
        value: 'Thailand',
      },
      {
        value: 'The Gambia',
      },
      {
        value: 'Timor-Leste',
      },
      {
        value: 'Togo',
      },
      {
        value: 'Tokelau',
      },
      {
        value: 'Tonga',
      },

      {
        value: 'Trinidad and Tobago',
      },
      {
        value: 'Tuvalu',
      },
      {
        value: 'Uganda',
      },
      {
        value: 'Ukraine',
      },
      {
        value: 'United Arab Emirates',
      },
      {
        value: 'United Kingdom',
      },
      {
        value: 'United States Of America',
      },
      {
        value: 'Uruguay',
      },
      {
        value: 'Uzbekistan',
      },
      {
        value: 'Vanuatu',
      },

       {
        value: 'Vatican City',
      },
      {
        value: 'Venezuela',
      },
      {
        value: 'Vietnam',
      },
      {
        value: 'Virgin Islands (U.S.)',
      },
      {
        value: 'Wake Island',
      },
      {
        value: 'Wallis and Futuna',
      },

       {
        value: 'West Bank',
      },
      {
        value: 'Western Sahara',
      },
      {
        value: 'Yemen',
      },
      {
        value: 'Zambia',
      },
      {
        value: 'Zimbabwe',
      },
];

const maritalStates = [
    {
        value : 'single'
    },
    {
        value : 'married'
    },
    {
        value : 'divorced'
    },
    {
        value : 'widowed'
    },
];

const studies = [
    {
      value: 'HIGH SCHOOL, NO DEGREE'
    },
    {
      value: 'HIGH SCHOOL DIPLOMA'
    },
    {
      value: 'VOCATIONAL SCHOOL'
    },
    {
        value: 'COLLEGE DEGREE'
    },
    {
        value: 'UNIVERSITY DEGREE'
    },
    {
        value: "MASTER'S DEGREE"
    },
    {
        value: "DOCTORATE DEGREE"
    },

];

const children = [
    { value : "1"},
    { value : "2"},
    { value : "3"},
]

export default function Home(){

    const [currency, setCurrency] = React.useState('EUR');
    const [gender, setGender] = React.useState('male');
    const [birthCountry, setBirthCountry] = React.useState('');
    const [livingCountry, setLivingCountry] = React.useState('');
    const [passportCountry, setPassportCountry] = React.useState('');
    const [maritalState, setMaritalState] = React.useState('');
    const [study, setStudy] = React.useState('');
    const [child, setChild] = React.useState('0');
  
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

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