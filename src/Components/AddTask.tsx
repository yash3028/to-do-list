import { Box, Paper, Button, Grid, InputBase } from "@mui/material";
import { addTodo } from "../Components/todo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Components/store";
import { styled, alpha } from '@mui/material/styles';
import Card from '../Components/Card'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function AddTask() {
    const [task, setTask] = useState("");
    const todos = useSelector((state: RootState) => state.todo.todos);
    const dispatch = useDispatch();
    return (
        <>
            <form onSubmit={() => {
                                dispatch(addTodo(task));
                                setTask("")
                            }}>

                <div>
                    <Box

                        sx={{
                            mt: 3,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >

                        <Paper
                            elevation={3}
                            sx={{
                                p: 2,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 2,
                                width: "100%",
                                maxWidth: 600,
                            }}
                        >

                            <Search sx={{ flexGrow: 1 }}>

                                <StyledInputBase
                                    placeholder="Add a task"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                />
                            </Search>
                            <Button variant="contained" sx={{ ml: 2 }} type="submit">
                                ADD
                            </Button>
                        </Paper>
                    </Box>
                </div>
            </form>

            <Grid  >
                <Card />
            </Grid>

        </>
    )
}
export default AddTask;