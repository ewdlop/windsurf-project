import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// Define the Todo item interface
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// Define the initial state type
export interface TodosState {
  items: Todo[];
}

// Initial state
const initialState: TodosState = {
  items: [],
};

// Create the todos slice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      };
      state.items.push(newTodo);
    },
    
    // Toggle todo completion status
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    
    // Remove a todo
    removeTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

// Export actions and reducer
export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
