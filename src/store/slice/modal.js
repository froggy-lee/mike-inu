import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showHowtoBuy: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showHowtoBuyModal: (state, { payload }) => {
      state.showHowtoBuy = payload
    }
  }
})

export const selectShowHowToBuy = state => state.modal.showHowtoBuy

export const { showHowtoBuyModal } = modalSlice.actions

export default modalSlice.reducer
