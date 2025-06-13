import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Slice/Slice";

export const store = configureStore({
 reducer: {
   todos: todosReducer,
 },
});