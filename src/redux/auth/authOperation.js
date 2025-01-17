import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://team-five-backend.onrender.com/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const unsetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', user);
      setAuthHeader(res.data.token);

      return res.data;
    } catch (error) {
      toast.error('User is alredy exist');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', user);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast.error('Invalid login or password');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    unsetAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshing = createAsyncThunk(
  'auth/refreshing',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) {
      return thunkAPI.rejectWithValue('Unable token user');
    }
    setAuthHeader(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const update = createAsyncThunk(
  'auth/update',
  async (user, thunkAPI) => {
    try {
      const response = await axios.patch('/users/update', user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (selectedFile, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.set('avatar', selectedFile);
      const response = await axios.patch('/users/avatars', formData);
      
      return response.data.avatarURL;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTheme = createAsyncThunk(
  'auth/changeTheme',
  async ({ theme }, thunkAPI) => {
    try {
      const response = await axios.patch('/users/theme', { theme });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
