// src/App.jsx
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import { seedDemo } from "./redux/tasksSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(seedDemo());
  }, [dispatch]);
  return <Dashboard />;
}
