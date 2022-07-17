import { createSlice } from '@reduxjs/toolkit'

const getInitialSong = () => {
    return JSON.parse(localStorage.getItem('chosenSong')) || 0;
}

export const chosenSongSlice = createSlice({
    name: 'chosenSong',
    initialState: {
        song: getInitialSong()
    },
    reducers: {
        changeSong: (state, action) => {
            state.song = action.payload
        },
    }})

export const { changeSong } = chosenSongSlice.actions;
export default chosenSongSlice.reducer;
