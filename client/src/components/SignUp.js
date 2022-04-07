import { Button, Grid, Paper, TextField, Typography,} from "@mui/material";
import React, { useRef, useState } from "react";
import "../index.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import BackgroundLogin from "../images/photo22.jpg";


const SignUp = () => {

  const baseURL = "http://localhost:3535/api";
  const user_name = useRef(null);
  const user_email = useRef(null);
  const user_password = useRef(null);
  const user_phoneNumber = useRef(null);
  const dateOfBirth = useRef(null);
  const [userResult, setUserResult] = useState(null);


  async function postData() {
    const postData = {
      name: user_name.current.value,
      email: user_email.current.value,
      password: user_password.current.value,
      phoneNumber: user_phoneNumber.current.value,
      dateOfBirth: dateOfBirth.current.value

    };
    try {
      const res = await fetch(`${baseURL}/signup`, {
        method: "post",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (!res.ok) {
        const message = `An error has occured:`;
        throw new Error(message);
      }
      const result = <Typography variant="h7" sx={{color:"#cd7700", fontFamily: 'Roboto'}}>WELCOME ON BOARD! PLEASE, LOGIN!</Typography>;
      setUserResult(result);
    } catch (err) {
      setUserResult(err.message);
    }
  }

  const validationSchema = yup.object({
  name: yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: yup.string()
    .email('Not valid e-mail')
    .required('Required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  phoneNumber: yup
    .string('Enter your phone number')
    .min(10, 'Not valid phone number')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Not valid phone number')
    .required('Phone number is required'),
});

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phoneNumber: '',
      dateOfBirth: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postData(values);
      formik.resetForm();
    },
  });

  return (
    <Grid container 
    spacing={2}
    sx={{
      backgroundImage: `url(${BackgroundLogin})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }} >
      <Grid item xs={12} md={12} display="flex" alignitems="stretch " justifyContent="center">
        <Paper
          sx={{
            "& .MuiTextField-root": { m: 1, width: "80%" },
          }}
          autoComplete="off"
          elevation={4}
        >
          <Typography variant="h6" mt={2} sx={{ fontFamily: 'Roboto' }} >JOIN US NOW</Typography>

          <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}} >
          {userResult && (
            <Typography>
              <pre>{userResult}</pre>
            </Typography>
          )}
            <TextField
              id="name"
              label="Name and Surname"
              name="name"
              variant="standard"
              inputRef={user_name}
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              id="email"
              label="Email"
              variant="standard"
              name="email"
              inputRef={user_email}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              variant="standard"
              inputRef={user_password}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              id="phoneNumber"
              label="Phone Number"
              type="phoneNumber"
              variant="standard"
              onChange={formik.handleChange}
              inputRef={user_phoneNumber}
              value={formik.values.phoneNumber}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            />
            <TextField
            label="Date of birth"
            variant="standard"
            type="date"
            defaultValue="2004-04-01"
            inputProps={{max: "2004-04-01"}}
            inputRef={dateOfBirth}
            />
            <Box>
            <Button 
              sx={{ mb: 3, mt: 5, color: "#273649", borderColor: "#273649"}}
              variant="outlined" 
              type="submit"
              >Sign Up</Button>
            </Box>
            <Typography sx={{padding:"10px"}}>If you are register user, please <Link to="/login" className="myLink-content" >Login</Link>.</Typography>

          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUp;

