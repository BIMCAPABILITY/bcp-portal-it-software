import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Heading from '../minor/Heading';
import { Button, Divider, FormControl, FormGroup, Paper } from '@mui/material';
import InputTypes from '../minor/InputTypes';
import CategoryDropdown from './CategoryDropdown';
import PrimaryButton from '../minor/PrimaryButton';
import UploadButton from '../minor/UploadButton';
import UseTextEditor from '../major/TextEditor';
import { FiEdit3 } from "react-icons/fi";

const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '1px solid #eee',
    boxShadow: 24,
    p: 4
  };

const EditSoftwareModel = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>

    <Button className='success-btn' title="Edit Software" onClick={handleOpen} disableRipple>
        <FiEdit3 />
    </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Heading className="mb-5" heading="Edit Software" />
            <Divider />
            <Paper className='mt-15' elevation={0}>
              <div className='asm-img-upload d-flex gap-10 pt-20 pb-20'>
                <div className='upload-img-preview'>
                  <img src={Image} />
                </div>
                <div className='upload-img-btn'>
                  <div className='mt-20'>
                    <UploadButton title="Choose File" onClickHander="" className="" />
                  </div>
                  <br />
                  <Divider />
                  <div>
                    <label htmlFor="">Allowed JPG, JPEG or PNG. Image Resolution: 225px * 225px. Max size of 800K</label>
                  </div>
                </div>
              </div>
            </Paper>
            <Divider />
            <Paper className='mt-20' elevation={0}>
              <FormGroup className='d-flex model-from-style'>
                <FormControl className='from-controll'>
                  <InputTypes id="standard-basic" className="" type="text" labe="Standard" variant="standard" placeholder="Enter Software Name" />
                </FormControl>
                <FormControl className='from-controll'>
                  <CategoryDropdown id="" className="margin-none" title="Select Category" />
                </FormControl>
                <FormControl className='from-controll'>
                  <InputTypes id="standard-basic" className="" type="number" labe="Standard" variant="standard" placeholder="Enter Software Seats" />
                </FormControl>
                <FormControl className='from-controll'>
                  <UseTextEditor  />
                </FormControl>
                <FormControl className='from-controll d-flex text-center ai-center cj-center mt-30'>
                  <PrimaryButton variant="contained" title="Confirm" size="medium" onClickHander="" className="btn-ws-100"></PrimaryButton>
                </FormControl>
            </FormGroup>
            </Paper>
        </Box>
      </Modal>
    </>
  )
}

export default EditSoftwareModel