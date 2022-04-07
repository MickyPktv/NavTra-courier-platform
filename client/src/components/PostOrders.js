import { Button, Grid, Paper, TextField, Typography,} from "@mui/material";
import React, { useRef, useState } from "react";
import "../index.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { border, Box } from "@mui/system";
import BackgroundLogin from "../images/photo22.jpg";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';


const NewOrder = () => {
	// HINT: each "item" in our list names a name,
	// a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([
	]);

	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(1);

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		calculateTotal();
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		calculateTotal();
	};

	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>

        <TextField
        label='Add an item...' 
        input value={inputValue} 
        onChange={(event) => setInputValue(event.target.value)} 
        />
					<Button><AddBoxOutlinedIcon icon={CircleOutlinedIcon} onClick={() => handleAddButtonClick()} /></Button>
				</div>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<Grid container>

										<Grid item>{item.itemName}</Grid>

             
							<div className='quantity'>
								
							</div>
              </Grid>
						</div>
					))}
				</div>

			</div>
		</div>
	);
};

export default NewOrder;