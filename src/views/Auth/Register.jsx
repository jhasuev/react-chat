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

  const isFieldValidate = (fieldName) => {
    const fieldLabel = rules[fieldName]?.fieldLabel ?? fieldName
    let val = rules[fieldName]?.field

    if ('trim' in rules[fieldName]) {
      val = val.trim()
    }

    if (rules[fieldName]?.required && !val) {
      return `'${fieldLabel}' is required`
    }

    if ('min' in rules[fieldName] && val?.length < rules[fieldName]?.min) {
      return `'${fieldLabel}' must be more or equal to '${rules[fieldName]?.min}' symbols`
    }

    if ('max' in rules[fieldName] && val?.length > rules[fieldName]?.max) {
      return `'${fieldLabel}' must be less or equal to '${rules[fieldName]?.max}' symbols`
    }

    if ('sameAs' in rules[fieldName] && val !== rules[fieldName]?.sameAs) {
      return `'${fieldLabel}' must be same as '${rules[fieldName]?.sameAsFieldLabel}'`
    }

    return ''
  }

  const checkFields = (fieldNames) => {
    const checkingFields = Array.isArray(fieldNames) ? fieldNames : [fieldNames]
    const fieldErrors = { ...errors }

    checkingFields.forEach((fieldName) => {
      fieldErrors[fieldName] = isFieldValidate(fieldName, fields[fieldName])
    })

    setErrors({ ...fieldErrors })

    return Object.values(fieldErrors).every(v => !v)
  }

  const onRegister = () => {
    if (!checkFields(Object.keys(rules))) {
      return EventEmitter.$emit('SHOW_MESSAGE', ['error', 'Fill all fields...'])
    }

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
