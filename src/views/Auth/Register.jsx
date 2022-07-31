import * as React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom"
import LinkComp from '@mui/material/Link';
import EventEmitter from '../../utils/EventEmitter';
import Validation from '../../utils/Validation';
import { register } from './../../store/auth'
import { useNavigate } from "react-router-dom"

const initialFields = {
  login: '',
  password: '',
  passwordConfirm: '',
}
let validate = null
export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [fields, setFields] = React.useState({...initialFields})
  const [errors, setErrors] = React.useState({...initialFields})
  const rules = {
    login: {
      field: fields.login,
      required: true,
      trim: true,
      min: 3,
      max: 27,
      fieldLabel: 'Login',
    },
    password: {
      field: fields.password,
      required: true,
      trim: true,
      min: 6,
      max: 127,
      fieldLabel: 'Password',
    },
    passwordConfirm: {
      field: fields.passwordConfirm,
      required: true,
      trim: true,
      sameAs: fields.password,
      sameAsFieldLabel: 'Password',
      fieldLabel: 'Password Confirm',
    },
  }

  React.useMemo(() => {
    validate = new Validation()
  }, [])

  const checkFields = (fieldNames) => {
    const result = validate.checkFields(fieldNames, { errors, rules })
    
    setErrors({ ...result.errors })
    return result.valid
  }

  const onRegister = async () => {
    if (!checkFields(Object.keys(rules))) {
      return EventEmitter.$emit('SHOW_MESSAGE', ['error', 'Fill all fields...'])
    }
    
    const login = fields.login.trim()
    const password = fields.password.trim()

    try {
      const response = await dispatch(register({ login, password }))
      if (response.payload.error) {
        throw response.payload.error
      } else {
        navigate('/chats')
      }
    } catch (error) {
      EventEmitter.$emit('SHOW_MESSAGE', ['error', error.toString() || 'Something went wrong...'])
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
            onBlur={e => checkFields('login')}
            onInput={e => setFields({...fields, login: e.target.value})}

            error={!!errors.login}
            helperText={errors.login}
          />
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            required
            label="Password"
            value={fields.password}
            onBlur={e => checkFields('password')}
            onInput={e => setFields({...fields, password: e.target.value})}
            
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            fullWidth
            required
            label="Password Confirm"
            value={fields.passwordConfirm}
            onBlur={e => checkFields('passwordConfirm')}
            onInput={e => setFields({...fields, passwordConfirm: e.target.value})}

            error={!!errors.passwordConfirm}
            helperText={errors.passwordConfirm}
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
