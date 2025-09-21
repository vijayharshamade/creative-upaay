// src/components/FilterBar.jsx
import { useDispatch, useSelector } from "react-redux";
import { setPriority, setQuery, resetFilters } from "../redux/filtersSlice";

export default function FilterBar() {
  const dispatch = useDispatch();
  const { priority, query } = useSelector((s) => s.filters);
  return (
    <div className="flex gap-2">
      <input
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
        className="px-3 py-2 rounded border bg-white"
        placeholder="Search tasks"
      />
      <select
        value={priority}
        onChange={(e) => dispatch(setPriority(e.target.value))}
        className="px-3 py-2 rounded border bg-white"
      >
        <option value="all">All priority</option>
        <option value="low">Low</option>
        <option value="high">High</option>
        <option value="completed">Completed</option>
      </select>
      <button
        className="px-3 py-2 border rounded bg-white"
        onClick={() => dispatch(resetFilters())}
      >
        Reset
      </button>
    </div>
  );
}
