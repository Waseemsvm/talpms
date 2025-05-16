import { useEffect, useRef, useState } from "react";
import Student from "./model/Student";
import { Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function StudentList() {

    let hasFetched = useRef(false);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        Student.fetchAllStudents().then(res => {
            if (hasFetched.current) return;
            hasFetched.current = true;
            console.log(res);
            setStudents(res.data);
        })
    }, []);


    return <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableCell>
                    Student ID
                </TableCell>
                <TableCell>
                    Student Name
                </TableCell>
                <TableCell>
                    Active
                </TableCell>
            </TableHead>
            <TableBody>
                {students.map(s => {
                    return <TableRow key={s.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell>{s.id}</TableCell>
                        <TableCell>{`${s.first_name} ${s.last_name}`}</TableCell>
                        <TableCell><Switch></Switch></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
}