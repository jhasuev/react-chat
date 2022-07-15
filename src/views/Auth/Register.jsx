import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom"
import LinkComp from '@mui/material/Link';


export default function Register() {
  return (
    <Card sx={{ maxWidth: 375, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5, textAlign: 'center' }}>
          Register into chat
        </Typography>

        <Typography variant="body2">
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            required
            label="Login"
          />
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            required
            label="Password"
          />
          <TextField
            fullWidth
            required
            label="Password Confirm"
          />
        </Typography>

      </CardContent>

      <CardActions sx={{p: 2, pt: 0}}>
        <Button variant='outlined' sx={{ width: '100%' }}>Register</Button>
      </CardActions>

      <CardActions sx={{p: 2, pt: 0, fontSize: 13, textAlign: 'center'}}>
        <p sx={{ width: '100%' }}>
          Have an account? &nbsp;
          <Link to="/auth/login">
            <LinkComp>
              Login!
            </LinkComp>
          </Link>
        </p>
      </CardActions>
    </Card>
  );
}
