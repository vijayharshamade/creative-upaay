// src/components/TaskCard.jsx
import { useDispatch, useSelector } from "react-redux";
import { selectTaskById } from "../redux/selectors";
import { deleteTask } from "../redux/tasksSlice";
import { Draggable } from "react-beautiful-dnd";

export default function TaskCard({ id, index }) {
  const t = useSelector((s) => selectTaskById(s, id));
  const dispatch = useDispatch();

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 ${
            snapshot.isDragging ? "ring-2 ring-indigo-300" : ""
          }`}
        >
          <div className="text-xs inline-flex items-center gap-2 mb-2">
            <span
              className={`px-2 py-0.5 rounded-full ${
                t.priority === "high"
                  ? "bg-red-50 text-red-700"
                  : t.priority === "completed"
                  ? "bg-green-50 text-green-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {t.priority === "completed"
                ? "Completed"
                : t.priority === "high"
                ? "High"
                : "Low"}
            </span>
          </div>
          <h3 className="font-semibold">{t.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{t.description}</p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>👥 {t.assignees.length}</span>
              <span>💬 {t.commentsCount}</span>
              <span>📎 {t.filesCount}</span>
            </div>
            <button
              className="text-red-600 text-sm"
              onClick={() => dispatch(deleteTask({ id }))}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
