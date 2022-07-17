import { createSlice } from '@reduxjs/toolkit'
import {getInitialPlaylist} from "../../services/APIClient";

const getInitialTrackList = () => {
    return JSON.parse(localStorage.getItem('trackList')) ||
        getInitialPlaylist();
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
