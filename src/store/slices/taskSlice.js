import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    // Your existing reducers...
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default taskSlice.reducer;
