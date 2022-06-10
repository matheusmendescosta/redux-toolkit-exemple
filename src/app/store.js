import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
//import peopleReduce from "../features/addPeople/NewPeopleSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});