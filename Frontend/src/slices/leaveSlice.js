// leaveSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  leaveRequests: [],
};

const leaveSlice = createSlice({
  name: 'leaves',
  initialState,
  reducers: {
    setLeaveRequests: (state, action) => {
      state.leaveRequests = action.payload;
    },
    updateLeaveStatus: (state, action) => {
      const index = state.leaveRequests.findIndex((leave) => leave.id === action.payload.id);
      if (index !== -1) {
        state.leaveRequests[index].status = action.payload.status;
      }
    },
  },
});

export const { setLeaveRequests, updateLeaveStatus } = leaveSlice.actions;
export default leaveSlice.reducer;
