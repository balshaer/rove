/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { BASEURL, USER } from "@/core/api/API";

function SidebarTag({ children }) {
  return <li className="text-[0.7rem] font-[400] py-3">{children}</li>;
}

function SidebarItem({ title, route, isActive, onClick }) {
  return (
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
  );
}

function SidebarItems() {
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || "/dashboard/showUsers"
  );

  const token = Cookies.get("Bearer");
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(`${BASEURL}${USER}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => setUser(data.data));
  }, []);

  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  const handleItemClick = (route) => {
    setActiveItem(route);
  };

  return (
    <ul className="mt-6 space-y-1">
      {user.role === "1995" && (
        <>
          <SidebarTag
            key="quickLinks"
            className="capitalize active:bg-transparent"
          >
            Quick Links
          </SidebarTag>
          <SidebarItem
            key="dashboard"
            title="Dashboard"
            route="/dashboard/main"
          />
          <SidebarItem
            key="newProduct"
            title="New Product"
            route="/dashboard/addProduct"
          />
          <SidebarItem
            key="newCategory"
            title="New Category"
            route="/dashboard/addCategory"
          />
          <SidebarTag key="catalog" className="capitalize">
            Catalog
          </SidebarTag>
          <SidebarItem key="users" title="Users" route="/dashboard/showUsers" />
          <SidebarItem key="writer" title="Writer" route="/dashboard/writer" />
          <SidebarItem
            key="categories"
            title="Categories"
            route="/dashboard/showCategories"
          />
          <SidebarItem
            key="products"
            title="Products"
            route="/dashboard/showProducts"
          />
          <SidebarItem
            key="addUser"
            title="Add User"
            route="/dashboard/addUser"
          />{" "}
        </>
      )}

      {user.role === "1996" && (
        <SidebarItem key="writer" title="Writer" route="/dashboard/writer" />
      )}

      {user.role === "1999" && (
        <>
          <SidebarItem
            key="categories"
            title="Categories"
            route="/dashboard/showCategories"
          />

          <SidebarItem
            key="newCategory"
            title="New Category"
            route="/dashboard/addCategory"
          />
        </>
      )}
    </ul>
  );
}

export default SidebarItems;
