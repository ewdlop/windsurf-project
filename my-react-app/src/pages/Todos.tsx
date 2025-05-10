import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Typography, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Checkbox, 
  IconButton, 
  Stack 
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import PageLayout from '../components/PageLayout';
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
    <PageLayout 
      title="Todo List" 
      alignItems="center" 
      textAlign="center"
    >
      {/* Todo Input */}
      <Stack direction="row" spacing={2} sx={{ width: '100%', mb: 3 }}>
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
        <List sx={{ width: '100%' }}>
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
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
        Total Todos: {todos.length} | 
        Completed: {todos.filter(todo => todo.completed).length}
      </Typography>
    </PageLayout>
  );
};

export default Todos;