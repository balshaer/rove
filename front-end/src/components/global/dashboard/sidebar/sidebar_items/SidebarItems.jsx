import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SidebarItem({ title, route, isActive, onClick }) {
  return (
    <li>
      <Link
        to={route}
        className={`block rounded-lg px-4 py-2 text-sm font-medium ${
          isActive
            ? "text-[#040320] bg-gray-100"
            : "text-[#666a7b] hover:bg-gray-100 hover:text-[#040320]"
        }`}
        onClick={onClick}
      >
        {title}
      </Link>
    </li>
  );
}

function SidebarItems() {
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || "/dashboard/showUsers"
  );

  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  const sidebarItems = [
    {
      sectionTitle: (
        <span key="quickLinks" className="capitalize active:bg-transparent">
          Quick Links
        </span>
      ),
    },
    { title: "Dashboard", route: "/dashboard/main" },
    { title: "New Product", route: "/dashboard/addProduct" },
    { title: "New Category", route: "/dashboard/addCategory" },
    {
      sectionTitle: (
        <span key="catalog" className="capitalize">
          Catalog
        </span>
      ),
    },
    { title: "Users", route: "/dashboard/showUsers" },
    { title: "Categories", route: "/dashboard/showCategories" },
    { title: "Products", route: "/dashboard/showProducts" },
    { title: "Add User", route: "/dashboard/addUser" },
  ];

  const handleItemClick = (route) => {
    setActiveItem(route);
  };

  return (
    <ul className="mt-6 space-y-1">
      {sidebarItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.sectionTitle ? (
            <li className="text-[0.7rem] font-[400] py-3" key={index}>
              {item.sectionTitle}
            </li>
          ) : (
            <SidebarItem
              key={index}
              title={item.title}
              route={item.route}
              isActive={activeItem === item.route}
              onClick={() => handleItemClick(item.route)}
            />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default SidebarItems;
