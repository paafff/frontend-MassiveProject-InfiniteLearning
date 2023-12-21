import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '', // State untuk nilai pencarian
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    clearSearchValue: (state) => {
      state.searchValue = '';
    },
  },
});

// Export action creators
export const { setSearchValue, clearSearchValue } = searchSlice.actions;

// Export reducer
export default searchSlice.reducer;
