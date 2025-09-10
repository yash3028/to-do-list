import { Box, Button, Paper, TextField, Typography, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleSelect } from "../Components/todo";
import { useState } from "react";

interface Todo {
  text: string;
  selected: boolean;
}

interface TodoCardProps {
  todo: Todo;
  index: number;
}

export default function TodoCard({ todo, index }: TodoCardProps) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [openDialog, setOpenDialog] = useState(false); 
  const handleDelete = () => {
    dispatch(deleteTodo(index));
    setOpenDialog(false);
  };

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
      {editing ? (
        <>
          <TextField
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            size="small"
          />
          <Button
            variant="contained"
            color="info"
            onClick={() => {
              dispatch(editTodo({ index, newText }));
              setEditing(false);
            }}
          >
            Save
          </Button>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Checkbox
              checked={todo.selected}
              onChange={() => dispatch(toggleSelect(index))}
            />
            <Typography>{todo.text}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button variant="outlined" size="small" onClick={() => setEditing(true)}>
              Edit
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="error"
              onClick={() => setOpenDialog(true)} 
            >
              Delete
            </Button>
          </Box>
        </>
      )}

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
