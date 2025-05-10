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
      <Typography variant="h6" component="p" color="textSecondary" paragraph>
        Manage your tasks efficiently and stay organized!
      </Typography>

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
          sx={{ minWidth: 120 }}
        >
          Add
        </Button>
      </Stack>

      {/* Todo List */}
      {todos.length === 0 ? (
        <Typography variant="body1" color="textSecondary" sx={{ mt: 3 }}>
          No todos yet. Add a task to get started!
        </Typography>
      ) : (
        <List sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2 }}>
          {todos.map((todo: Todo) => (
            <ListItem 
              key={todo.id} 
              secondaryAction={
                <IconButton 
                  edge="end" 
                  aria-label="delete"
                  onClick={() => dispatch(removeTodo(todo.id))}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <Checkbox
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                color="primary"
              />
              <ListItemText 
                primary={todo.text} 
                sx={{ 
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? 'text.secondary' : 'inherit'
                }} 
              />
            </ListItem>
          ))}
        </List>
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