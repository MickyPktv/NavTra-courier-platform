import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BackgroundLogin from "../images/photo22.jpg";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box } from "@mui/system";

const Login = () => {

  const baseURL = "http://localhost:3535/api";
  const user_email = useRef(null);
  const user_password = useRef(null);
  const [result, setResult] = useState(null);
  const emailError = document.getElementsByClassName('email-error').innerHTML;
  console.log(emailError)
  const passwordError = document.getElementsByClassName('.password.error').innerHTML;

  async function getData() {

    const postData = {
      email: user_email.current.value,
      password: user_password.current.value,
      
    };
    try {
      const res = await fetch(`${baseURL}/login`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(postData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data)
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        // eslint-disable-next-line no-restricted-globals
        // location.assign('/my-profile')
      }
      console.log(data.errors.email)
      if (data.errors) {
        emailError.innerHTML= data.errors.email;
        passwordError.innerHTML = data.errors.password;
      }
    } catch (err) {
      setResult(err.message);
    }
  }

  const validationSchema = yup.object({
  email: yup.string()
    .email('Not valid e-mail')
    .required('Required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Not valid password')
    .required('Required'),
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
      getData(values);
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
                  <Typography padding={3}><PermIdentityIcon sx={{color:"orange", fontSize:"50px"}}></PermIdentityIcon></Typography>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto' }}>LOGIN</Typography>

          <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}} >
          {result && (
            <Typography>
              {result}
            </Typography>
            
          )}

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

<div className="email error"></div>

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

<div className="password error"></div>

            <Box>
            <Button 
              sx={{ mb: 3, mt: 5, color: "#273649", borderColor: "#273649"}}
              variant="outlined" 
              type="submit"
              >Log In</Button>
            </Box>
            
            <Typography padding={5}>Do not have account? <Link to="/sign-up" className="myLink-content" >Sign Up</Link>.</Typography>

          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
