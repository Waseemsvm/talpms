import { useEffect, useRef, useState } from "react";
import Student from "../model/Student";
import { Box, IconButton, Skeleton, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function StudentList() {
    let hasFetched = useRef(false);
    const [students, setStudents] = useState([] as Student[]);

    useEffect(() => {
        Student.fetchAllStudents().then(res => {
            if (hasFetched.current) return;
            hasFetched.current = true;
            setStudents(res.data.map((r: any) => new Student(r)));
        })
    }, []);

    const isFetching = () => {
        return !students.length && !hasFetched.current
    }

    const TableHeaders = [
        { id: "id", text: "Student ID", type: "text" }, { id: "name", text: "Student Name", type: "text" }, { id: "grade", text: "Grade", type: "text" }, { id: "is_active", text: "Active", type: "boolean" },];
    return (<Box>
        <Toolbar>
            <Typography sx={{ flexGrow: 1 }} variant="h6">{`Students ( ${students.length} )`}</Typography>
            <IconButton >
                <Add />
            </IconButton>
        </Toolbar>

        {isFetching() ? <><Skeleton animation="wave" height="20px" /><Skeleton animation="wave" height="20px" /><Skeleton animation="wave" height="20px" /></> : <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {TableHeaders.map(h => <TableCell key={h.id}>{h.text}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map(s => <TableRow key={s.id.toLowerCase()}>
                        {TableHeaders.map(h => <TableCell key={h.id.toLowerCase() + "-" + s.id.toLowerCase()}>{h.type == "boolean" ? <Switch checked={!!(s as any)[h.id]} onChange={e => {
                            s.is_active = e.target.checked;
                            setStudents([...students]);
                            e.target.checked ? Student.activate(s.id) : Student.deactivate(s.id);
                        }} /> : <Typography>{(s as any)[h.id]}</Typography>}</TableCell>)}
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>}

    </Box >)
}