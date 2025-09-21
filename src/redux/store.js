// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import tasks from "./tasksSlice";
import filters from "./filtersSlice";
import { loadState, saveState } from "../utils/storage";

const preloaded = loadState();
export const store = configureStore({
  reducer: { tasks, filters },
  preloadedState: preloaded,
});

store.subscribe(() => {
  const state = store.getState();
  saveState(state);
});
