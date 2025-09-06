import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
    todos: string[];
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
                state.todos.push(action.payload);
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos.splice(action.payload, 1);
        },
        clearTodos: (state) => {
            state.todos = [];
        },
        editTodo: (state, action: PayloadAction<{ index: number; newText: string }>) => {
            const { index, newText } = action.payload;
            if (state.todos[index] && newText.trim() !== "") {
                state.todos[index] = newText;
            }
        },
    }
});

export const { addTodo, deleteTodo, clearTodos,editTodo } = todoSlice.actions;
export default todoSlice.reducer;
