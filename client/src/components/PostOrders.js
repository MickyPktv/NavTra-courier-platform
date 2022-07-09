import { Button, Grid, Paper, TextField, Typography,} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { Box } from "@mui/system";
import BackgroundLogin from "../images/photo22.jpg";
import jwt_decode from 'jwt-decode';
import { Link } from "react-router-dom";

const NewOrder = () => {

  
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("jwt")===null){
      // eslint-disable-next-line no-restricted-globals
      location.assign('/login')
    }
    else {
    const storedToken = localStorage.getItem('jwt');
    const decoded = jwt_decode(storedToken);
    if (decoded.user) {
     setUser(decoded.user);
    } 
  }
  }, []);

  const baseURL = "http://localhost:3535/api";
  const product_title = useRef(null);
  const product_url = useRef(null);
  const image_url = useRef(null);
  const product_quantity = useRef(null);
  const userId = user._id;
  const userName  = user.name;
  const userAddress  = user.address;
  const addInfo = useRef(null);
  const orderId = Math.round(Math.random() * 400);

  const [userResult, setUserResult] = useState(null);

  console.log(orderId)

  async function postData() {
    const postData = {
      orderId: orderId.value,
      title: product_title.current.value,
      imageUrl: image_url.current.value,
      url: product_url.current.value,
      quantity: product_quantity.current.value,
      addInfo: addInfo.current.value,
      user: userId,
      userName: userName,
      address: userAddress

    };
    try {
      const res = await fetch(`${baseURL}/orders`, {
        method: "POST",
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
      const result = <Typography variant="h7" sx={{color:"#272d2f", fontFamily: 'Roboto'}}>Your order has been submitted! <Link to="/my-profile" className="myLink-content" >Back to my orders</Link></Typography>;

      setUserResult(result);
    } catch (err) {
      setUserResult(err.message);
    }
  }

  const validationSchema = yup.object({
  product: yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  url: yup.string()
    .required('Required'),
  qty: yup
    .string('Enter quantity')
    .required('Required'),
});

  const formik = useFormik({
    initialValues: {
      product: '',
      url: '',
      qty: '',
      addInfo: ''

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
          <Typography variant="h6" mt={2} sx={{ fontFamily: 'Roboto' }} >NEW ORDER</Typography>

          <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}} >
          {userResult && (
            <Typography>
              <pre>{userResult}</pre>
            </Typography>
          )}
            <TextField
              id="product"
              label="Product title"
              name="product"
              variant="standard"
              inputRef={product_title}
              value={formik.values.product}
              onChange={formik.handleChange}
              error={formik.touched.product && Boolean(formik.errors.product)}
              helperText={formik.touched.product && formik.errors.product}
            />
            <TextField
              id="imageUrl"
              label="Image URL"
              variant="standard"
              name="imageUrl"
              inputRef={image_url}
              value={formik.values.imageUrl}
              onChange={formik.handleChange}
              error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
              helperText={formik.touched.imageUrl && formik.errors.imageUrl}
            />
            <TextField
              id="url"
              label="Product URL"
              variant="standard"
              name="url"
              inputRef={product_url}
              value={formik.values.url}
              onChange={formik.handleChange}
              error={formik.touched.url && Boolean(formik.errors.url)}
              helperText={formik.touched.url && formik.errors.url}
            />
            <TextField
              id="qty"
              label="Quantity"
              name="qty"
              variant="standard"
              inputRef={product_quantity}
              value={formik.values.qty}
              onChange={formik.handleChange}
              error={formik.touched.qty && Boolean(formik.errors.qty)}
              helperText={formik.touched.qty && formik.errors.qty}
            />
             <TextField
              id="addInfo"
              label="Additional information"
              name="addInfo"
              variant="standard"
              inputRef={addInfo}
              value={formik.values.addInfo}
              onChange={formik.handleChange}
            />
            <Box>
            <Button 
              sx={{ mb: 3, mt: 5, color: "#273649", borderColor: "#273649"}}
              variant="outlined" 
              type="submit"
              >Submit your order</Button>
            </Box>

          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NewOrder;
