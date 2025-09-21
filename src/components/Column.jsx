// src/components/Column.jsx
import { useSelector } from "react-redux";
import { selectFilteredIds } from "../redux/selectors";
import TaskCard from "./TaskCard";
import AddTaskDialog from "./AddTaskDialog";
import { Droppable } from "@hello-pangea/dnd";

export default function Column({ status, title, color }) {
  const ids = useSelector((s) => selectFilteredIds(s, status));

  return (
    <section className="bg-gray-100 rounded-xl p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              status === "todo"
                ? "bg-purple-600"
                : status === "inprogress"
                ? "bg-amber-500"
                : "bg-green-600"
            }`}
          />
          <h2 className="font-medium">{title}</h2>
          <span className="text-xs text-gray-500">({ids.length})</span>
        </div>
        <AddTaskDialog status={status} />
      </div>
      <div className={`border-t ${color} mb-3`} />

      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`space-y-3 min-h-[40px] ${
              snapshot.isDraggingOver ? "bg-indigo-50" : ""
            }`}
          >
            {ids.map((id, index) => (
              <TaskCard key={id} id={id} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </section>
  );
}
