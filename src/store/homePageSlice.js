import { createSlice } from '@reduxjs/toolkit'

export const homePageSlice = createSlice({
  name: 'counter',
  initialState: {
    url: {},
    genre: {}
  },
  reducers: {
    getApiConfiguration: (state, action)=>{
        state.url = action?.payload

    },
    getGenres: (state, action)=>{
        state.genres = action?.payload
    }   
  }
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homePageSlice.actions

export default homePageSlice.reducer