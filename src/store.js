import { configureStore } from '@reduxjs/toolkit';
import trackListReducer from "./features/trackListSlice/trackListSlice";
import chosenSongReducer from "./features/chosenSongSlice/chosenSongSlice";

export default configureStore({
    reducer: {
        trackList: trackListReducer,
        chosenSong: chosenSongReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })

})
