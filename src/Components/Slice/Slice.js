import { createSlice,nanoid } from "@reduxjs/toolkit";

  
const initialState = [{id:`1`, title: "Learn React",}];
export const slice = createSlice({

    initialState,
    name: "todos",
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: nanoid(),
                title: action.payload.title,
            });
        },
    },

});

export const { addTodo } = slice.actions;
export default slice.reducer;