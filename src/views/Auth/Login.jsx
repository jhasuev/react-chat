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
import Validation, { RULES } from '../../utils/Validation';
import { LOGIN } from './../../store/auth'
import { useNavigate } from "react-router-dom"

const initialFields = {
  login: '',
  password: '',
}
let validate = null
export default function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [fields, setFields] = React.useState({...initialFields})
  const [errors, setErrors] = React.useState({...initialFields})
  const rules = {
    login: {
      ...RULES.login,
      field: fields.login,
    },
    password: {
      ...RULES.password,
      field: fields.password,
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

  const onLogin = async () => {
    if (!checkFields(Object.keys(rules))) {
      return EventEmitter.$emit('SHOW_MESSAGE', ['error', 'Fill all fields...'])
    }
    
    const login = fields.login.trim()
    const password = fields.password.trim()

    try {
      const response = await dispatch(LOGIN({ login, password }))
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
          Login into chat
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
        </Typography>

      </CardContent>

      <CardActions sx={{p: 2, pt: 0}}>
        <Button
          variant='outlined'
          sx={{ width: '100%' }}
          onClick={onLogin.bind()}
        >Login</Button>
      </CardActions>

      <CardActions sx={{p: 2, pt: 0, fontSize: 13, textAlign: 'center'}}>
        <p sx={{width: '100%'}}>
          Don't have an account? &nbsp;
          <Link to="/auth/register">
            <LinkComp component="span">
              Create it!
            </LinkComp>
          </Link>
        </p>
      </CardActions>
    </Card>
  );
}
