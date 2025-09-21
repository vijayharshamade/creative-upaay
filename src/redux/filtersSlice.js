// src/redux/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";
const filtersSlice = createSlice({
  name: "filters",
  initialState: { priority: "all", query: "", due: "all" },
  reducers: {
    setPriority: (s, a) => {
      s.priority = a.payload;
    },
    setQuery: (s, a) => {
      s.query = a.payload;
    },
    setDue: (s, a) => {
      s.due = a.payload;
    },
    resetFilters: (s) => {
      s.priority = "all";
      s.query = "";
      s.due = "all";
    },
  },
});
export const { setPriority, setQuery, setDue, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
