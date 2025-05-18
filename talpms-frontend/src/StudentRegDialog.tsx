import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import StudentRegisterForm from './StudentRegisterForm';
import { useState } from 'react';
import Student from './model/Student';
export default function StudentRegDialog({ open, onClose }: { open: boolean, onClose?: VoidFunction }) {

    const initialFormDetails = {
        first_name: "",
        last_name: "",
        mobile: "",
        school: "",
        guardian: "",
        email: "",
        address: "",
        grade: "",
        gender: ""
    }

    const [formDetails, setFormDetails] = useState(initialFormDetails);
    const [backdropOpen, setBackdropOpen] = useState(false);

    const handleRegisterStudent = async () => {
        setBackdropOpen(true);
        try {
            await Student.registerStudent(formDetails);
            // await new Promise((res, rej) => {
            //     setTimeout(() => {
            //         rej(null)
            //     }, 10000);
            // })
            onClose?.();

        } catch (ex) {

        } finally {
            setBackdropOpen(false);
        }
    }

    return <Dialog open={open}>
        <DialogTitle align='center'>Register Student</DialogTitle>
        <DialogContent style={{ display: "flex", justifyContent: "center " }}>
            <StudentRegisterForm onFormStateChange={setFormDetails} formDetails={formDetails} ></StudentRegisterForm>
        </DialogContent>
        <DialogActions>
            <Button onClick={e => {
                onClose?.();
            }}>Cancel</Button>
            <Button variant='contained' type='submit' onClick={e => {
                handleRegisterStudent()
            }}>Register</Button>
        </DialogActions>
        <Backdrop open={backdropOpen}>
            <CircularProgress></CircularProgress>
        </Backdrop>
    </Dialog>
}