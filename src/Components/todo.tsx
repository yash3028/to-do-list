import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  text: string;
  selected: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      if (action.payload.trim() !== "") {
        state.todos.push({ text: action.payload, selected: false });
      }
    },
    toggleSelect: (state, action: PayloadAction<number>) => {
      state.todos[action.payload].selected = !state.todos[action.payload].selected;
    },
    deleteSelected: (state) => {
      state.todos = state.todos.filter((todo) => !todo.selected);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos.splice(action.payload, 1);
    },
    editTodo: (state, action: PayloadAction<{ index: number; newText: string }>) => {
      const { index, newText } = action.payload;
      if (state.todos[index] && newText.trim() !== "") {
        state.todos[index].text = newText;
      }
    },
  },
});

export const { addTodo, toggleSelect, deleteSelected, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;



