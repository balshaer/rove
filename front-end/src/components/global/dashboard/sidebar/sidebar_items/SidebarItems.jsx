/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { BASEURL, USER } from "@/core/api/API";
import * as SheetPrimitive from "@radix-ui/react-dialog";

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
  const closeMenu = SheetPrimitive.Close;

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
            onClick={closeMenu}
            key="dashboard"
            title="Dashboard"
            route="/dashboard/main"
          />
          <SidebarItem
            onClick={closeMenu}
            key="newProduct"
            title="New Product"
            route="/dashboard/addProduct"
          />
          <SidebarItem
            onClick={closeMenu}
            key="newCategory"
            title="New Category"
            route="/dashboard/addCategory"
          />
          <SidebarTag key="catalog" className="capitalize">
            Catalog
          </SidebarTag>
          <SidebarItem
            onClick={closeMenu}
            key="users"
            title="Users"
            route="/dashboard/showUsers"
          />
          <SidebarItem
            onClick={closeMenu}
            key="writer"
            title="Writer"
            route="/dashboard/writer"
          />
          <SidebarItem
            onClick={closeMenu}
            key="categories"
            title="Categories"
            route="/dashboard/showCategories"
          />
          <SidebarItem
            onClick={closeMenu}
            key="products"
            title="Products"
            route="/dashboard/showProducts"
          />
          <SidebarItem
            onClick={closeMenu}
            key="addUser"
            title="Add User"
            route="/dashboard/addUser"
          />{" "}
        </>
      )}

      {user.role === "1996" && (
        <SidebarItem
          onClick={closeMenu}
          key="writer"
          title="Writer"
          route="/dashboard/writer"
        />
      )}

      {user.role === "1999" && (
        <>
          <SidebarItem
            onClick={closeMenu}
            key="categories"
            title="Categories"
            route="/dashboard/showCategories"
          />

          <SidebarItem
            onClick={closeMenu}
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
