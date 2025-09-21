// src/pages/Dashboard.jsx
import AppShell from "../components/AppShell";
import FilterBar from "../components/FilterBar";
import Column from "../components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { moveTask } from "../redux/tasksSlice";

export default function Dashboard() {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result || {};
    if (!destination) return;
    const from = source.droppableId; // 'todo' | 'inprogress' | 'done'
    const to = destination.droppableId; // same keys
    const samePos = from === to && source.index === destination.index;
    if (samePos) return;

    dispatch(
      moveTask({
        id: draggableId,
        from,
        to,
        index: destination.index, // insert index in destination list
      })
    );
  };

  return (
    <AppShell>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold">Mobile App</h1>
          <FilterBar />
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Column status="todo" title="To Do" color="border-purple-500" />
            <Column
              status="inprogress"
              title="On Progress"
              color="border-amber-500"
            />
            <Column status="done" title="Done" color="border-green-600" />
          </div>
        </DragDropContext>
      </div>
    </AppShell>
  );
}
