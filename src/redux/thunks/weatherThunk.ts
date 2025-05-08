import {createAsyncThunk} from '@reduxjs/toolkit';
import {getWeather} from '../../services';
import { AxiosError } from 'axios';

export const weatherThunk = createAsyncThunk(
  'getWeather',
  async (_request: string, {rejectWithValue}) => {
    try {
      const response = await getWeather(_request);
      return response.data;
    } catch (e) {
      return rejectWithValue(e as AxiosError);
    }
  },
);
