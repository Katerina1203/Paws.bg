"use client"
import React from 'react';
import { createAnimalPost } from "@/lib/action";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
	borderRadius: '8px', 
};

// function ChildModal() {
// 	const [open, setOpen] = React.useState(false);
// 	const handleOpen = () => {
// 		setOpen(true);
// 	};
// 	const handleClose = () => {
// 		setOpen(false);
// 	};

// 	return (
// 		<React.Fragment>
// 			<Button onClick={handleOpen}>Запази</Button>
// 			<Modal
// 				open={open}
// 				onClose={handleClose}
// 				aria-labelledby="child-modal-title"
// 				aria-describedby="child-modal-description"
// 			>
// 				<Box sx={{ ...style, width: 200 }}>
// 					<h2 id="child-modal-title">A</h2>
// 					<p id="child-modal-description">
// 					 ok?
// 					</p>
// 					<Button onClick={handleClose}>Ok</Button>
// 				</Box>
// 			</Modal>
// 		</React.Fragment>
// 	);
// }

const NestedModal = ({ open, setOpen }) => {
	const [age, setAge] = useState('');
	const [ageError, setAgeError] = useState('');

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const validateAge = (age) => {
		if (age <= 0 || !Number.isInteger(Number(age))) {
			return 'Age must be a positive integer';
		}
		return '';
	};

	const handleAgeChange = (event) => {
		setAge(event.target.value);
		const errorMessage = validateAge(event.target.value);
		setAgeError(errorMessage);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		const errorMessage = validateAge(age);
		if (errorMessage) {
			setAgeError(errorMessage);
			return;
		}

		await createAnimalPost(formData);
		handleClose();
	};
	return (
		<div>
			
			
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
			>
				<Box sx={style}>
					<Typography variant="h6" id="parent-modal-title" gutterBottom>
						Данни за животинчето
					</Typography>

					<form onSubmit={handleSubmit}>
						<TextField
							label="Description"
							name="description"
							variant="outlined"
							fullWidth
							margin="normal"
							required
						/>
						<TextField
							label="Type"
							name="type"
							variant="outlined"
							fullWidth
							margin="normal"
							required
						/>
						<TextField
							label="Age"
							name="age"
							value={age}
							onChange={handleAgeChange}
							error={Boolean(ageError)}
							helperText={ageError}
							variant="outlined"
							fullWidth
							margin="normal"
							required
							inputProps={{ min: 0 }}
						/>
						<TextField
							label="City"
							name="city"
							variant="outlined"
							fullWidth
							margin="normal"
							required
						/>
						<TextField
							label="Gender"
							name="gender"
							variant="outlined"
							fullWidth
							margin="normal"
							required
						/>
						<Button
							variant="contained"
							component="label"
							fullWidth
							sx={{ 
								backgroundColor: '#c2426d', 
								mt: 2,
								'&:hover': {
									backgroundColor: '#f3d7e0',
								},
							}}
						>
							Upload Images
							<input type="file" name="file" multiple accept="image/*" hidden />
						</Button>
						<Button
							type="submit"
							variant="contained"
							fullWidth
							sx={{ 
								backgroundColor: '#c2426d', 
								mt: 3,
								'&:hover': {
									backgroundColor: '#f3d7e0', 
								},
							}}
						>
							Create
						</Button>
					</form>
				</Box>
			</Modal>
		</div>
	);
};

export default NestedModal;