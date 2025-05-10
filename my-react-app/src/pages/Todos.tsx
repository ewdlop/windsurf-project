import React, { useState } from 'react';
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
  Paper,
  Stack
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import type { RootState, AppDispatch } from '../store';
import type { Todo } from '../store/todosSlice';
import { addTodo, toggleTodo, removeTodo } from '../store/todosSlice';
import { useDispatch, useSelector } from 'react-redux';

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
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Stack spacing={3}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Todo List
          </Typography>

          {/* Todo Input */}
          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Add a new todo"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
            />
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleAddTodo}
              sx={{ minWidth: 100 }}
            >
              Add
            </Button>
          </Stack>

          {/* Todo List */}
          {todos.length > 0 ? (
            <List>
              {todos.map((todo: Todo) => (
                <ListItem 
                  key={todo.id} 
                  secondaryAction={
                    <IconButton 
                      edge="end" 
                      aria-label="delete"
                      onClick={() => dispatch(removeTodo(todo.id))}
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
          ) : (
            <Typography variant="body2" color="textSecondary" align="center">
              No todos yet. Add a new todo!
            </Typography>
          )}

          {/* Todo Stats */}
          <Typography variant="body2" color="textSecondary" align="center">
            Total Todos: {todos.length} | 
            Completed: {todos.filter(todo => todo.completed).length}
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Todos;