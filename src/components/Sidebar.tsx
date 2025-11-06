import {
  Activity,
  MessageSquare,
  FileCheck,
  Video,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function Sidebar({
  currentPage,
  onNavigate,
  isCollapsed,
  onToggleCollapse,
}: SidebarProps) {
  const navItems = [
    { id: "autochat", label: "AutoChat", icon: MessageSquare },
    { id: "autoscan", label: "AutoScan", icon: Activity },
    { id: "autocheck", label: "AutoCheck", icon: FileCheck },
    { id: "autocompanion", label: "AutoCompanion", icon: Video },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div
      className={`bg-white border-r border-gray-200 h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between gap-2">
        {!isCollapsed && (
          <div className="w-[50%]">
            <img src="/logo.svg" alt="Logo" className="w-full h-auto" />
          </div>
        )}
        <Button variant="ghost" size="icon" onClick={onToggleCollapse}>
          {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </Button>
      </div>

      <nav className="flex-1 p-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg mb-1 transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-blue-50"
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
