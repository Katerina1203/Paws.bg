import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { uploadAnimalPhotos, createAnimal } from "@/lib/action"; 
import styles from './createanimalmodal.module.css'; 

function ConfirmationModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="confirmation-modal-title"
      aria-describedby="confirmation-modal-description"
    >
      <Box className={styles.modal} sx={{ width: 300 }}>
        <h2 id="confirmation-modal-title">Confirm Creation</h2>
        <p id="confirmation-modal-description">
          Are you sure you want to create this animal?
        </p>
        <Button onClick={handleConfirm} sx={{ mr: 2 }}>Yes</Button>
        <Button onClick={handleClose}>No</Button>
      </Box>
    </Modal>
  );
}

export default function CreateAnimalModal() {
  const [open, setOpen] = React.useState(false);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    description: '',
    type: '',
    age: '',
    userId: '',
    city: '',
    gender: '',
    files: [],
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setConfirmOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'files') {
      setFormData((prevData) => ({
        ...prevData,
        files: files,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmOpen(true); // Open the confirmation modal
  };

  const handleConfirm = async () => {
    const uploadFormData = new FormData();
    for (let key in formData) {
      if (key === 'files') {
        for (let i = 0; i < formData.files.length; i++) {
          uploadFormData.append('file', formData.files[i]);
        }
      } else {
        uploadFormData.append(key, formData[key]);
      }
    }

    await uploadAnimalPhotos(uploadFormData);

    const result = await createAnimal(uploadFormData);

    if (result.error) {
      console.error(result.error);
    } else {
      console.log('Animal created successfully!');
    }


    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>Create Animal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="create-animal-modal-title"
        aria-describedby="create-animal-modal-description"
      >
        <Box className={styles.modal}>
          <h2 id="create-animal-modal-title">Create Animal</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Description"
              variant="outlined"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Type"
              variant="outlined"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Age"
              variant="outlined"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="User ID"
              variant="outlined"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="City"
              variant="outlined"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Gender"
              variant="outlined"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            />
            <Button
              variant="contained"
              component="label"
              sx={{ mt: 2, mb: 2 }}
            >
              Upload Photos
              <input
                type="file"
                name="files"
                multiple={true}
                accept="image/*"
                onChange={handleChange}
                hidden
                required
              />
            </Button>
            <Box className={styles.buttonContainer}>
              <Button type="submit" variant="contained">Create</Button>
              <Button type="button" onClick={handleClose}>Cancel</Button>
            </Box>
          </form>
          <ConfirmationModal
            open={confirmOpen}
            handleClose={() => setConfirmOpen(false)}
            handleConfirm={handleConfirm}
          />
        </Box>
      </Modal>
    </div>
  );
}
