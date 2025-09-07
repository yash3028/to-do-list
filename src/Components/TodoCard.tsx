import { Box, Button, Paper, TextField, Typography, Checkbox } from "@mui/material";
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
  deleteMode: boolean;
}

export default function TodoCard({ todo, index, deleteMode }: TodoCardProps) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

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
            {deleteMode && (
              <Checkbox
                checked={todo.selected}
                onChange={() => dispatch(toggleSelect(index))}
              />
            )}
            <Typography>{todo.text}</Typography>
          </Box>

          {!deleteMode && (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }} gap={1}>
              <Button variant="outlined" size="small" onClick={() => setEditing(true)}>
                Edit
              </Button>
              <Button
                variant="outlined"
                size="small"
                onClick={() => dispatch(deleteTodo(index))}
              >
                Delete
              </Button>
            </Box>
          )}
        </>
      )}
    </Paper>
  );
}
