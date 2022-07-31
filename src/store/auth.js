import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../services/AuthService'

export const register = createAsyncThunk(
  'auth/register',
  async (payload) => {
    const response = await AuthService.register(payload)
    return response
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.token,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        if (action.payload.status === 'success') {
          state.token = action.payload.data.token
          localStorage.token = state.token ?? ''
        }
      })
  },
})

export const {
  setWeather,
} = authSlice.actions

export default authSlice.reducer