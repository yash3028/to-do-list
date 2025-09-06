import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Box, IconButton } from '@mui/material';

export default function TaskCount() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const cnt = todos.length;
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={cnt} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
    </Box>
  );
}
