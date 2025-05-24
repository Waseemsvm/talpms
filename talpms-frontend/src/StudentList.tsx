import { useEffect, useRef, useState } from "react";
import Student from "./model/Student";
import { Box, IconButton, Input, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import StudentRegDialog from "./StudentRegDialog";

export default function StudentList() {

    let hasFetched = useRef(false);
    const [students, setStudents] = useState([] as Student[]);
    const [dialogOpen, setDialogOpen] = useState(false);
    // const [isStudRegSnackOpen, setIsStudRegSnackOpen] = useState(false);

    // const handleStudRegSnackbar = () => {
    //     setIsStudRegSnackOpen(false);
    // }

    useEffect(() => {
        Student.fetchAllStudents().then(res => {
            if (hasFetched.current) return;
            hasFetched.current = true;
            setStudents(res.data.map((r: any) => new Student(r)));
        })
    }, []);

    const handleDialogClose = () => {
        setDialogOpen(false);
        // setIsStudRegSnackOpen(true)
    }

    let debounceStudentSearch: number;
    const handleStudentSearch = (e: any) => {
        clearTimeout(debounceStudentSearch);
        debounceStudentSearch = setTimeout(async () => {
            const res: any = await Student.search(e.target.value);
            setStudents(res.data.map((r: any) => new Student(r)));
        }, 250);
    }

    return <Box>
        <Toolbar variant="dense" >
            <Typography variant="h5">Students</Typography>
            <div style={{ flexGrow: 1 }}></div>
            <Input style={{ border: "0.1px solid black", borderRadius: "5px" }} placeholder="Search Students" onChange={handleStudentSearch} />
            <IconButton type="button" onClick={e => {
                setDialogOpen(true);
            }}>
                <Add />
            </IconButton>
        </Toolbar>
        <StudentRegDialog open={dialogOpen} onClose={handleDialogClose} />
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Student ID
                        </TableCell>
                        <TableCell>
                            Student Name
                        </TableCell>
                        <TableCell>
                            Grade
                        </TableCell>
                        <TableCell>
                            Active
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student) => {
                        return <TableRow key={student.id}>
                            <TableCell>
                                {student.id}
                            </TableCell>
                            <TableCell>
                                {`${student.first_name} ${student.last_name}`}
                            </TableCell>
                            <TableCell>
                                {student.grade}
                            </TableCell>
                            <TableCell>
                                <Switch checked={!!student.is_active} onChange={e => {
                                    student.is_active = e.target.checked;
                                    setStudents([...students]);
                                    e.target.checked ? Student.activate(student.id) : Student.deactivate(student.id);
                                }}></Switch>
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        {/* <Snackbar open={isStudRegSnackOpen} autoHideDuration={2000} onClose={handleStudRegSnackbar}></Snackbar> */}
    </Box>
}