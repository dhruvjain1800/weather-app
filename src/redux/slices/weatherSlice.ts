import {createSlice} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';
import {weatherThunk} from '../thunks/weatherThunk';
import {Weather} from '../../modals/modals';

const initialState: {
  loading: boolean;
  data: {weather: Weather[]; main: {temp: number}} | null;
  error: AxiosError | null;
} = {
  loading: false,
  data: null,
  error: null,
};
const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(weatherThunk.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(weatherThunk.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
    });
    builder.addCase(
      weatherThunk.rejected,
      (state, {payload}: {payload: any}) => {
        state.loading = false;
        state.data = null;
        state.error = payload;
      },
    );
  },
});

export default weatherSlice.reducer;
