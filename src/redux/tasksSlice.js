// src/redux/tasksSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initial = {
  byId: {},
  columns: {
    todo: [],
    inprogress: [],
    done: [],
  },
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initial,
  reducers: {
    seedDemo: (state) => {
      if (Object.keys(state.byId).length) return;
      const demo = [
        {
          title: "Brainstorming",
          description: "Team ideas exploration",
          priority: "low",
          status: "todo",
        },
        {
          title: "Research",
          description: "User research for optimal UX",
          priority: "high",
          status: "todo",
        },
        {
          title: "Wireframes",
          description: "Low fidelity screens",
          priority: "high",
          status: "todo",
        },
        {
          title: "Brainstorming",
          description: "Diverse experience into play",
          priority: "low",
          status: "inprogress",
        },
        {
          title: "Design System",
          description: "Adapt previous UI",
          priority: "completed",
          status: "done",
        },
      ];
      demo.forEach((d) => {
        const id = nanoid();
        state.byId[id] = {
          id,
          ...d,
          commentsCount: 12,
          filesCount: 0,
          assignees: ["A", "B", "C"],
        };
        state.columns[d.status].push(id);
      });
    },
    addTask: {
      prepare: ({ title, description, status = "todo", priority = "low" }) => ({
        payload: { id: nanoid(), title, description, status, priority },
      }),
      reducer: (state, { payload }) => {
        state.byId[payload.id] = {
          ...payload,
          commentsCount: 0,
          filesCount: 0,
          assignees: [],
        };
        state.columns[payload.status].unshift(payload.id);
      },
    },
    updateTask: (state, { payload }) => {
      const { id, changes } = payload;
      state.byId[id] = { ...state.byId[id], ...changes };
    },
    moveTask: (state, { payload }) => {
      const { id, from, to, index } = payload;
      // remove from source
      const src = state.columns[from];
      const pos = src.indexOf(id);
      if (pos > -1) src.splice(pos, 1);
      // insert into destination
      const dest = state.columns[to];
      const i = typeof index === "number" ? index : dest.length;
      dest.splice(i, 0, id);
      state.byId[id].status = to;
    },
    deleteTask: (state, { payload }) => {
      const { id } = payload;
      const status = state.byId[id]?.status;
      if (!status) return;
      state.columns[status] = state.columns[status].filter((x) => x !== id);
      delete state.byId[id];
    },
    clearAll: () => initial,
  },
});

export const { seedDemo, addTask, updateTask, moveTask, deleteTask, clearAll } =
  tasksSlice.actions;
export default tasksSlice.reducer;
