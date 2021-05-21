import { createSlice } from "@reduxjs/toolkit";

export const samplerSlice = createSlice({
  name: "sampler",
  initialState: [],
  reducers: {
    add: (state, action) => {
      let id = state.length ? state[state.length - 1].id + 1 : 0;
      return [
        ...state,
        {
          name: action.payload,
          type: "default",
          start: 0,
          end: 3,
          id: id,
        },
      ];
    },
    updateSample: (state,action,newStart,newEnd) => {
      return state.map((item) => {
        item.id == action.payload
        ? {...item,start:newStart,end:newEnd}
        : item
      })
    }
  },
  removeSample: (state,action) => {
    return state.filter((item)=> item.id!=action.payload)
  }

});

export const { add,updateSample,removeSample } = samplerSlice.actions;
export default samplerSlice.reducer;

export const samplerSelector = (state) => state.sampler;