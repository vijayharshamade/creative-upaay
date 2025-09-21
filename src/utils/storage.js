// src/utils/storage.js
export const loadState = () => {
  try {
    const raw = localStorage.getItem("appState");
    return raw ? JSON.parse(raw) : undefined;
  } catch {
    return undefined;
  }
};
export const saveState = (state) => {
  try {
    localStorage.setItem("appState", JSON.stringify(state));
  } catch {}
};
