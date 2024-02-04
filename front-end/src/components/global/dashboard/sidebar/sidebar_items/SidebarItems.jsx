/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function SidebarItem({ title, showRoute, addRoute }) {
  return (
    <li>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-[#666a7b] hover:bg-gray-100 hover:text-gray-700">
          <span className="text-sm font-medium"> {title} </span>
          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>
        <ul className="mt-2 space-y-1 px-4">
          <li>
            <Link
              to={showRoute}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-[#666a7b] hover:bg-gray-100 hover:text-gray-700"
            >
              Show {title}
            </Link>
          </li>
          <li>
            <Link
              to={addRoute}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-[#666a7b] hover:bg-gray-100 hover:text-gray-700"
            >
              Add {title}
            </Link>
          </li>
        </ul>
      </details>
    </li>
  );
}

export default function SidebarItems() {
  return (
    <ul className="mt-6 space-y-1">
      <SidebarItem
        title="Users"
        showRoute="/dashboard/showUsers"
        addRoute="/dashboard/addUser"
      />
      <SidebarItem
        title="Categories"
        showRoute="/dashboard/showCategories"
        addRoute="/dashboard/addCategories"
      />
      <SidebarItem
        title="Products"
        showRoute="/dashboard/showProducts"
        addRoute="/dashboard/addProducts"
      />
    </ul>
  );
}
