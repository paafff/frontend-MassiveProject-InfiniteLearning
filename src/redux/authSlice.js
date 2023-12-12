import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { user: null, loading: false, error: null, message: '' };

export const getMe = createAsyncThunk(
  'user/getme',
  async (unusedParameter, thunkAPI) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/getme`);

      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

// Aksi untuk melakukan logout user
export const logOut = createAsyncThunk('user/LogOut', async () => {
  await axios.delete(`${import.meta.env.VITE_API_URL}/logout`);
  alert('Sukses logout');
});

// Slice untuk manajemen state otentikasi
export const authSlice = createSlice({
  name: 'auth/slice',
  initialState,
  reducers: {
    resetState: () => initialState,
  },

  extraReducers: (builder) => {
    builder

      // Reducer saat mendapatkan data user sedang berjalan
      .addCase(getMe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Reducer saat mendapatkan data user berhasil
      .addCase(getMe.fulfilled, (state, action) => {
        state.loading = false;
        state.userAuth = action.payload;
      })
      // Reducer saat mendapatkan data user gagal
      .addCase(getMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const reset = authSlice.actions.resetState;
export default authSlice;
