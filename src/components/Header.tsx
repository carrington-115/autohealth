import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface HeaderProps {
  pageTitle: string;
  onLogout: () => void;
}

export function Header({ pageTitle, onLogout }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <h1 className="text-gray-900">{pageTitle}</h1>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  JD
                </AvatarFallback>
              </Avatar>
              <span className="text-gray-700">John Doe</span>
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </div>
    </header>
  );
}
