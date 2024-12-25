// attendanceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  attendanceRecords: [],
};

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    setAttendanceRecords: (state, action) => {
      state.attendanceRecords = action.payload;
    },
    updateAttendance: (state, action) => {
      const index = state.attendanceRecords.findIndex((record) => record.id === action.payload.id);
      if (index !== -1) {
        state.attendanceRecords[index] = action.payload;
      }
    },
  },
});

export const { setAttendanceRecords, updateAttendance } = attendanceSlice.actions;
export default attendanceSlice.reducer;
