// src/redux/selectors.js
export const selectColumns = (s) => s.tasks.columns;
export const selectTaskById = (s, id) => s.tasks.byId[id];
export const selectFilteredIds = (state, status) => {
  const ids = state.tasks.columns[status] || [];
  const { priority, query } = state.filters;
  return ids.filter((id) => {
    const t = state.tasks.byId[id];
    const priOk = priority === "all" || t.priority === priority;
    const qOk =
      !query ||
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase());
    return priOk && qOk;
  });
};
