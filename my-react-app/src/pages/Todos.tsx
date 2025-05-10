import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Checkbox, 
  IconButton, 
  Box 
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import type { RootState, AppDispatch } from '../store';
import type { Todo } from '../store/todosSlice';
import { addTodo, toggleTodo, removeTodo } from '../store/todosSlice';

const Todos: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const todos = useSelector((state: RootState) => state.todos.items);
  const dispatch: AppDispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputText.trim()) {
      dispatch(addTodo(inputText.trim()));
      setInputText('');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Todo List
      </Typography>

      {/* Todo Input */}
      <Box display="flex" mb={3}>
        <TextField
          fullWidth
          variant="outlined"
          label="Add a new todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          sx={{ mr: 2 }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddTodo}
        >
          Add
        </Button>
      </Box>

      {/* Todo List */}
      <List>
        {todos.map((todo: Todo) => (
          <ListItem 
            key={todo.id} 
            secondaryAction={
              <IconButton 
                edge="end" 
                aria-label="delete"
                onClick={() => dispatch(removeTodo(todo.id as string))}
              >
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <ListItemText 
              primary={todo.text} 
              sx={{ 
                textDecoration: todo.completed ? 'line-through' : 'none',
                opacity: todo.completed ? 0.5 : 1
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Todo Stats */}
      <Box mt={3} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          Total Todos: {todos.length} | 
          Completed: {todos.filter(todo => todo.completed).length}
        </Typography>
      </Box>
    </Container>
  );
};

export default Todos;
