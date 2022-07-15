import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom"
import LinkComp from '@mui/material/Link';


export default function Login() {
  return (
    <Card sx={{ maxWidth: 375, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5, textAlign: 'center' }}>
          Login into chat
        </Typography>

        <Typography variant="body2">
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            required
            label="Login"
          />
          <TextField
            fullWidth
            required
            label="Password"
          />
        </Typography>

      </CardContent>

      <CardActions sx={{p: 2, pt: 0}}>
        <Button variant='outlined' sx={{ width: '100%' }}>Login</Button>
      </CardActions>
      <CardActions sx={{p: 2, pt: 0, fontSize: 13, textAlign: 'center'}}>
        <p sx={{width: '100%'}}>
          Don't have an account? &nbsp;
          <Link to="/auth/register">
            <LinkComp>
              Create it!
            </LinkComp>
          </Link>
        </p>
      </CardActions>
    </Card>
  );
}
