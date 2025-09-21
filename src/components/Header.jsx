// src/components/Header.jsx
export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
      <input
        className="w-96 max-w-full bg-gray-100 rounded px-3 py-2 outline-none"
        placeholder="Search for anything..."
      />
      <div className="flex items-center gap-3">
        <button className="p-2 rounded hover:bg-gray-100">📅</button>
        <button className="p-2 rounded hover:bg-gray-100">🔔</button>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
