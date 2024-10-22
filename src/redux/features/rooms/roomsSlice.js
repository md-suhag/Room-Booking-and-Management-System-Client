import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = [{}];

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  const response = await axios.get("/api/rooms");
  return response.data;
});
const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
});
export const {} = roomsSlice.actions;
export default roomsSlice.reducer;
