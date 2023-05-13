import { CameraInfoType } from '@constants/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
    numCameras: number,
    gridColumns: number,
    cameras: Array<CameraInfoType>,
}

const initialState: GlobalState = {
    numCameras: 5,
    gridColumns: 3,
    cameras: [],
}

const GlobalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setGridColumns: (state, action:PayloadAction<number>) => {
            state.gridColumns = action.payload;
        },
        setCameras: (state, action:PayloadAction<Array<CameraInfoType>>) => {
            state.cameras = [...action.payload];
        },
        setNumCameras: (state, action:PayloadAction<number>) => {
            state.numCameras = action.payload;
        },
    }
});

export const { setGridColumns,
                setCameras,
                setNumCameras } = GlobalSlice.actions;
export default GlobalSlice.reducer;

