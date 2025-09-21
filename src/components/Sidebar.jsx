// src/components/Sidebar.jsx
export default function Sidebar() {
  return (
    <aside className="w-64 hidden md:block bg-white border-r border-gray-200 p-4">
      <div className="text-lg font-semibold mb-6">Project M.</div>
      <nav className="space-y-2">
        {["Home", "Messages", "Tasks", "Members", "Settings"].map((i) => (
          <div
            key={i}
            className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
          >
            {i}
          </div>
        ))}
      </nav>
      <div className="mt-8">
        <div className="text-xs uppercase text-gray-500 mb-2">My Projects</div>
        <div className="px-3 py-2 rounded bg-indigo-50 text-indigo-700">
          Mobile App
        </div>
      </div>
      <div className="mt-8 p-4 rounded-lg bg-yellow-50">
        <div className="font-medium mb-2">Thoughts Time</div>
        <p className="text-sm text-gray-600 mb-3">
          Share your thoughts with peers.
        </p>
        <button className="px-3 py-1.5 bg-white border rounded">
          Write a message
        </button>
      </div>
    </aside>
  );
}
