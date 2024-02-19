import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import TableSkeleton from "@/components/custom/skeletons/TableSkeleton";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BASEURL, CATEGORY } from "@/core/api/API";
import { Axios } from "@/core/api/Axios";
import { Link } from "react-router-dom";
import { CATEGORIES } from "@/core/api/API";

const CategoriesTable = () => {
  const [CategoryData, setCategoryData] = useState([]);
  const [reloadUseEffects, setReloadEffects] = useState(false);

  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const TotalCategories = CategoryData.length;
  localStorage.setItem("TotalCategories", TotalCategories);

  Cookies.set("TotalCategories", TotalCategories);

  async function handleDeleteCategory(id) {
    try {
      console.log("Deleting category with ID:", id);
      const res = await Axios.delete(`${BASEURL}${CATEGORY}/${id}`);
      console.log("Delete response:", res);
      setReloadEffects((prev) => !prev);
      toast({
        description: "Category deleted",
      });
    } catch (err) {
      console.error("Delete error:", err);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("Bearer");

        const response = await axios.get(`${BASEURL}${CATEGORIES}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setCategoryData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };

    fetchData();
  }, [reloadUseEffects]);

  return loading ? (
    <Table className="relative h-[100vh] overflow-hidden max-md:text-xs max-md:w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>

          <TableHead>Image</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <div className="w-full h-[100vh] absolute inset-0 m-auto flex justify-center items-start top-0 pt-40">
        <TableSkeleton />
      </div>
    </Table>
  ) : (
    <Table className="max-md:text-xs max-md:w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>

          <TableHead>Image</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {CategoryData.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} style={{ textAlign: "center" }}>
              <div className="flex gap-1 items-center justify-center">
                <span>No Categories found</span>
                <span className="pt-[2px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </span>
              </div>
            </TableCell>
          </TableRow>
        ) : (
          CategoryData.map((category, index) => (
            <TableRow key={category.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{category.title}</TableCell>
              <TableCell>
                <img
                  src={category.image}
                  className="max-h-10 max-w-10 h-full w-full object-contain"
                  alt=""
                />
              </TableCell>

              <TableCell className="text-right flex gap-2 w-full  items-center justify-end">
                <button
                  className="bg-gray-200 p-1.5 rounded-xl transition-all translate-x-3 hover:bg-gray-300 hover:opacity-95"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#2b2e4a"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.515 10.674a1.875 1.875 0 0 0 0 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374ZM12.53 9.22a.75.75 0 1 0-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L15.31 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <Link to={`/dashboard/category/${category.id}`}>
                  <button className="bg-gray-200 p-1.5 rounded-xl transition-all translate-x-3 hover:bg-gray-300 hover:opacity-95">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                      <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default CategoriesTable;
