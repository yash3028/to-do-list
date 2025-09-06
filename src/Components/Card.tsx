import {  useSelector } from "react-redux";
import { RootState } from "../Components/store";
import Grid from "@mui/material/Grid";
import TodoCard from "../Components/TodoCard";

function Card() {
  const todos = useSelector((state: RootState) => state.todo.todos);
console.log(todos.length);
  return (
     <Grid container spacing={2} sx={{ mt: 2 }}>
      {todos.map((todo, index) => (
        <Grid size={{xs: 12, sm: 6, md: 4}} key={index}>
          <TodoCard todo={todo} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Card;
