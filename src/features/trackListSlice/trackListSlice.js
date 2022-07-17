import { createSlice } from '@reduxjs/toolkit'
import acdc from "../../music/acdc.mp3";
import metallica from "../../music/metallica.mp3";
import gunsNroses from "../../music/gunsNroses.mp3";
import cent50 from "../../music/50cent.mp3";
import eminem from "../../music/eminem.mp3";

const getInitialTrackList = () => {
    return JSON.parse(localStorage.getItem('trackList')) ||
        [new Audio(acdc), new Audio(metallica), new Audio(gunsNroses),
            new Audio(cent50), new Audio(eminem)];
}

export const trackListSlice = createSlice({
    name: 'trackList',
    initialState: {
        tracks: getInitialTrackList()
    },
    reducers: {
        addTrack: (state, action) => {
            state.tracks.push(action.payload);
        },
        removeTrack: (state, action) => {
            state.tracks = state.tracks.filter((track, id) => id !== action.payload);
        }
    }})

export const { addTrack, removeTrack } = trackListSlice.actions;
export default trackListSlice.reducer;
