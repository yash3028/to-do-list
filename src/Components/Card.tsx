import Grid from "@mui/material/Grid";
import TodoCard from "../Components/TodoCard";

interface Todo {
  text: string;
  selected: boolean;
}

interface CardProps {
  todos: Todo[];
}

function Card({ todos }:CardProps) {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {todos.map((todo, index) => (
        <Grid size={{xs:12,sm:6,md:4}}  key={index}>
          <TodoCard todo={todo} index={index} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Card;
