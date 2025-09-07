import Grid from "@mui/material/Grid";
import TodoCard from "../Components/TodoCard";

interface Todo {
  text: string;
  selected: boolean;
}

interface CardProps {
  todos: Todo[];
  deleteMode: boolean;
}

function Card({ todos, deleteMode }:CardProps) {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {todos.map((todo, index) => (
        <Grid size={{xs:12,sm:6,md:4}}  key={index}>
          <TodoCard todo={todo} index={index} deleteMode={deleteMode} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Card;
