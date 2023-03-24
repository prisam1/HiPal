import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      localStorage.clear()
      state.user = action?.payload?.others
      state.token = action?.payload?.token 
    },
    register(state, action) {
      
      state.user = action?.payload?.others
      state.token = action?.payload?.token

    },
    createIt(state, action) {
      
      state.user = action?.payload?.others
      state.token = action?.payload?.token 
    },
    updateIt(state, action) {
      
      state.user = action?.payload?.others
      state.token = action?.payload?.token 
    },
    getIt(state, action) {
     
      state.user = action?.payload?.others
      state.token = action?.payload?.token 
    },
    logout(state) {
       state.user = null
       state.token = null
       localStorage.clear()
    },
  },
})

export const { login, register, logout, createIt, updateIt, getIt } = authSlice.actions

export default authSlice.reducer