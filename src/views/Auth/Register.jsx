import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom"
import LinkComp from '@mui/material/Link';
import EventEmitter from '../../utils/EventEmitter';

const initialFields = {
  login: '',
  password: '',
  passwordConfirm: '',
}

export default function Register() {
  const [fields, setFields] = React.useState({...initialFields})

  const onRegister = () => {
    EventEmitter.$emit('SHOW_MESSAGE', ['info', 'Отправка запроса на сервер...'])
    
    // EventEmitter.$emit('SHOW_MESSAGE', ['success', 'Text TextText Text'])
    // EventEmitter.$emit('SHOW_MESSAGE', ['error', 'Text TextText Text'])
    // EventEmitter.$emit('SHOW_MESSAGE', ['warning', 'Text TextText Text'])
    // EventEmitter.$emit('SHOW_MESSAGE', ['info', 'Text TextText Text'])
    /* eslint-disable no-unused-vars */
    const login = fields.login.trim()
    const password = fields.password.trim()
    const passwordConfirm = fields.passwordConfirm.trim()

    try {
      // TODO поставить валидацию формы
      // TODO отправить запрос на сервер
      // TODO обработать ответ
    } catch (error) {
      EventEmitter.$emit('SHOW_MESSAGE', ['error', 'Что-то пошло не так...'])
    }
  }
  
  return (
    <Card sx={{ maxWidth: 375, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5, textAlign: 'center' }}>
          Register into chat
        </Typography>

        <Typography variant="body2" component="div">
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            required
            label="Login"
            value={fields.login}
            onInput={e => setFields({...fields, login: e.target.value})}
          />
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            required
            label="Password"
            value={fields.password}
            onInput={e => setFields({...fields, password: e.target.value})}
          />
          <TextField
            fullWidth
            required
            label="Password Confirm"
            value={fields.passwordConfirm}
            onInput={e => setFields({...fields, passwordConfirm: e.target.value})}
          />
        </Typography>

      </CardContent>

      <CardActions sx={{p: 2, pt: 0}}>
        <Button
          variant='outlined'
          sx={{ width: '100%' }}
          onClick={onRegister.bind()}
        >Register</Button>
      </CardActions>

      <CardActions sx={{p: 2, pt: 0, fontSize: 13, textAlign: 'center'}}>
        <p sx={{ width: '100%' }}>
          Have an account? &nbsp;
          <Link to="/auth/login">
            <LinkComp component="button">
              Login!
            </LinkComp>
          </Link>
        </p>
      </CardActions>
    </Card>
  );
}
