import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../services/AuthService'

export const REGISTER = createAsyncThunk(
  'auth/REGISTER',
  async (payload) => {
    const response = await AuthService.register(payload)
    return response
  }
)

export const LOGIN = createAsyncThunk(
  'auth/LOGIN',
  async (payload) => {
    const response = await AuthService.login(payload)
    return response
  }
)

const initialState = {
  token: localStorage.token,
}

const AUTH_REDUCER = (state = initialState, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case 'SET_AUTH': {
      state.token = action.payload.token
      localStorage.token = state.token ?? ''
      
      break
    }
  }
  return { ...state }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(REGISTER.fulfilled, (state, { payload }) => {
        if (payload.status === 'success') {
          AUTH_REDUCER(state, { type: 'SET_AUTH', payload: payload.data })
        }
      })
      .addCase(LOGIN.fulfilled, (state, { payload }) => {
        if (payload.status === 'success') {
          AUTH_REDUCER(state, { type: 'SET_AUTH', payload: payload.data })
        }
      })
  },
})

export default authSlice.reducer