import { configureStore } from '@reduxjs/toolkit';
import trackListReducer from "./features/trackListSlice/trackListSlice";

export default configureStore({
    reducer: {
        trackList: trackListReducer,
    }})
