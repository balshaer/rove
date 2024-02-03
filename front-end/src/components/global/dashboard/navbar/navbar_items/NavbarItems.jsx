import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div className="sticky inset-x-0 bottom-0 border-t ">
      <a href="#" className="flex items-center gap-2  p-4 ">
        <img
          alt="Man"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-xs">
            <strong className="block font-medium">Eric Frusciante</strong>
            <span> eric@frusciante.com </span>
          </p>
        </div>
      </a>
    </div>
  );
}

export default function NavbarItems() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ul className="flex items-center gap-6 text-sm flex-row-reverse">
          <li>
            <UserProfile />
          </li>
        </ul>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/team">Team</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/logout">Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
