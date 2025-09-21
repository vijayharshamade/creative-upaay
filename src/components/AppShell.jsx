// src/components/AppShell.jsx
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}
