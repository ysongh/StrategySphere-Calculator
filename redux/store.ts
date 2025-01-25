import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from './exampleSlice';
import gameSlice from './gameSlice';

const store = configureStore({
  reducer: {
    example: exampleSlice,
    game: gameSlice,
  }
});

export { store };