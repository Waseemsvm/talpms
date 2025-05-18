import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function StudentRegisterForm({ formDetails, onFormStateChange: setFormDetails }: { formDetails: any, onFormStateChange: Function }) {

    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        {/* <Typography variant="h5"> Student Registration Form</Typography> */}
        <FormControl style={{ width: "300px" }}>
            <TextField id="student-first-name" label="First Name" variant="standard" placeholder="First Name" required onChange={e => {
                setFormDetails({ ...formDetails, first_name: e.target.value })
            }} />
        </FormControl>
        <FormControl style={{ width: "300px" }}>
            <TextField id="student-last-name" label="Last Name" variant="standard" placeholder="Last Name" onChange={e => {
                setFormDetails({ ...formDetails, last_name: e.target.value })
            }} />
        </FormControl>
        <FormControl style={{ width: "300px" }}>
            <TextField id="student-mobile-number" label="Mobile Number" variant="standard" placeholder="Mobile Number" onChange={e => {
                setFormDetails({ ...formDetails, mobile: e.target.value })
            }} />
        </FormControl>
        <FormControl style={{ width: "300px" }}>
            <TextField id="student-school" label="School" variant="standard" placeholder="School Name" onChange={e => {
                setFormDetails({ ...formDetails, school: e.target.value })
            }} />
        </FormControl>
        <FormControl style={{ width: "300px" }}>
            <TextField id="student-guardian" label="Guardian Name" variant="standard" placeholder="Guardian Name" onChange={e => {
                setFormDetails({ ...formDetails, guardian: e.target.value })
            }} />
        </FormControl>
        <FormControl style={{ width: "300px" }}>
            <TextField id="student-email" label="Email" variant="standard" placeholder="Email" type="email" onChange={e => {
                setFormDetails({ ...formDetails, email: e.target.value })
            }} />
        </FormControl>
        <FormControl style={{ width: "300px" }}>
            <TextField id="student-address" label="Address" variant="standard" placeholder="Address" onChange={e => {
                setFormDetails({ ...formDetails, address: e.target.value })
            }} />
        </FormControl>
        <FormControl style={{ width: "300px" }}>
            <InputLabel id="student-grade">Grade</InputLabel>
            <Select id="student-grade" label="Grade" variant="standard" value={formDetails.grade} onChange={e => {
                setFormDetails({ ...formDetails, grade: e.target.value })
            }}>
                <MenuItem value="">None</MenuItem>
                <MenuItem value={1}>I</MenuItem>
                <MenuItem value={2}>II</MenuItem>
                <MenuItem value={3}>III</MenuItem>
                <MenuItem value={4}>IV</MenuItem>
                <MenuItem value={5}>V</MenuItem>
                <MenuItem value={6}>VI</MenuItem>
                <MenuItem value={7}>VII</MenuItem>
                <MenuItem value={8}>VIII</MenuItem>
                <MenuItem value={9}>IX</MenuItem>
                <MenuItem value={10}>X</MenuItem>
            </Select>
        </FormControl>
        <FormControl>
            <FormLabel id="student-gender-label">
                Gender
            </FormLabel>
            <RadioGroup aria-labelledby="student-gender-label" onChange={e => {
                setFormDetails({ ...formDetails, gender: e.target.value })
            }}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="others" control={<Radio />} label="Others" />
            </RadioGroup>
        </FormControl>
        <FormControl style={{ width: "300px" }}>
            {/* <Button variant="contained" onClick={() => {
                //@ts-ignore
                formDetails.id = "111"
                Student.registerStudent(formDetails);
                console.log(formDetails);
            }}>Submit</Button> */}
        </FormControl>
    </div>
}