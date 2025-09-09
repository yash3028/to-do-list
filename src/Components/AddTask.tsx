import { Box, Paper, Button, Grid, InputBase, IconButton } from "@mui/material";
import { addTodo, deleteSelected } from "../Components/todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled, alpha } from '@mui/material/styles';
import Card from '../Components/Card'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { RootState } from "../Components/store";

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
  const [deleteMode, setDeleteMode] = useState(false);
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const toggleDeleteMode = () => {
    setDeleteMode(!deleteMode);
  };

  const deleteAllSelected = () => {
    dispatch(deleteSelected());
    setDeleteMode(false);
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addTodo(task));
          setTask("");
        }}
      >
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
          <IconButton onClick={toggleDeleteMode}>
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </form>

      <Grid>
        <Card todos={todos}  />
      </Grid>

      {deleteMode && todos.some((t) => t.selected) && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          variant="contained"
          color="error"
          onClick={deleteAllSelected}
          sx={{ mt: 2 }}
        >
          Delete Selected
        </Button>
        </Box>
      )}
    </>
  );
}

export default AddTask;
