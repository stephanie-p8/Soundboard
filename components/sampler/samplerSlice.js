import { createSlice } from "@reduxjs/toolkit";

export const samplerSlice = createSlice({
    name:"sampler",
    initialState:[],
    reducers:{
        add: (state, action) => {
            let id = state.length ? state[state.length - 1].id + 1 : 0;
            return [
              ...state,
              {
                name: action.payload,
                type: "default",
                start:null,
                end:null,
                id: id,
              },
            ];
        }
    }

});

export const { add } = samplerSlice.actions;
export default samplerSlice.reducer;

export const samplerSelector = (state) => state.sampler;