// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import candidateReducer from './slices/candidateSlice';
import employeeReducer from './slices/employeeSlice';
import attendanceReducer from './slices/attendanceSlice';
import leaveReducer from './slices/leaveSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    candidates: candidateReducer,
    employees: employeeReducer,
    attendance: attendanceReducer,
    leaves: leaveReducer,
    ui: uiReducer,
  },
});

export default store;
