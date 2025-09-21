// src/components/AddTaskDialog.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

export default function AddTaskDialog({ status }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const dispatch = useDispatch();

  const submit = () => {
    if (!title.trim()) return;
    dispatch(addTask({ title, description, status, priority }));
    setTitle("");
    setDescription("");
    setPriority("low");
    setOpen(false);
  };

  if (!open) {
    return (
      <button
        className="px-2 py-1 text-sm border rounded bg-white"
        onClick={() => setOpen(true)}
      >
        + Add
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-4 w-full max-w-md">
        <h4 className="font-semibold mb-3">Add Task</h4>
        <div className="space-y-3">
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border rounded px-3 py-2"
            placeholder="Description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            className="w-full border rounded px-3 py-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="high">High</option>
            <option value="completed">Completed</option>
          </select>
          <div className="flex justify-end gap-2 pt-2">
            <button
              className="px-3 py-2 border rounded"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-3 py-2 bg-indigo-600 text-white rounded"
              onClick={submit}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
