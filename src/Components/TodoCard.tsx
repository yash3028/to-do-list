import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../Components/todo";
import { useState } from "react";

interface TodoCardProps {
  todo: string;
  index: number;
}

export default function TodoCard({ todo, index }: TodoCardProps) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo);

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
          <Typography>{todo}</Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }} gap={1}>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setEditing(true)}
            >
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
        </>
      )}
    </Paper>
  );
}
