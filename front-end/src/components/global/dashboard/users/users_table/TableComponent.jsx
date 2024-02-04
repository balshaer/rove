/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { users, baseURL } from "@/core/api/API";
import TableSkeleton from "@/components/custom/skeletons/TableSkeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LoadingTable = () => (
  <Table>
    {/* <TableCaption>User Data</TableCaption> */}
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell colSpan={4} style={{ textAlign: "center" }}>
          <TableSkeleton />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

const UserDataTable = ({ userData }) => (
  <Table>
    {/* <TableCaption>User Data</TableCaption> */}
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {userData.length === 0 ? (
        <TableRow>
          <TableCell colSpan={4} style={{ textAlign: "center" }}>
            No user found
          </TableCell>
        </TableRow>
      ) : (
        userData.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-right">Actions</TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  </Table>
);

const TableComponent = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookie = new Cookies();
        const token = cookie.get("Bearer");

        const response = await axios.get(`${baseURL}${users}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setLoading(false), 2000);
      }
    };

    fetchData();
  }, []);

  return loading ? <LoadingTable /> : <UserDataTable userData={userData} />;
};

export default TableComponent;
