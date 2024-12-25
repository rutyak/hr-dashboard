// uiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  isLoading: false,
  toastMessage: '',
  editPopup: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModalOpen = true;
    },
    hideModal: (state) => {
      state.isModalOpen = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    showToast: (state, action) => {
      state.toastMessage = action.payload;
    },
    // setEditPopup: (state, action) => {
    //     state.editPopup = !editPopup;
    // }
  },
});

export const { showModal, hideModal, setLoading, showToast } = uiSlice.actions;
export default uiSlice.reducer;
