// candidateSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  candidates: [],
  searchQuery: '',
};

const candidateSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    setCandidates: (state, action) => {
      state.candidates = action.payload;
    },
    addCandidate: (state, action) => {
      state.candidates.push(action.payload);
    },
    updateCandidate: (state, action) => {
      const index = state.candidates.findIndex((candidate) => candidate.id === action.payload.id);
      if (index !== -1) {
        state.candidates[index] = action.payload;
      }
    },
    deleteCandidate: (state, action) => {
      state.candidates = state.candidates.filter((candidate) => candidate.id !== action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCandidates, addCandidate, updateCandidate, deleteCandidate, setSearchQuery } = candidateSlice.actions;
export default candidateSlice.reducer;
