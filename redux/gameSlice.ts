import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  logs: string[];
}

const initialState: GameState = {
  logs: [],
};

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<GameState>) => {
      state.logs.push(action.payload);
    }
  }
});

export const { addEvent } = gameSlice.actions;
export default gameSlice.reducer;