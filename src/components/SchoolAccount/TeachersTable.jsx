"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pagination } from "react-pagination-bar";
import "react-pagination-bar/dist/index.css";
import { FaEye, FaTrash } from "react-icons/fa";
import { CustomPagination } from "../shared/CustomPagination/CustomPagination";
import Swal from "sweetalert2";
import UpdateUserModal from "./UpdateUserModal/UpdateUserModal";
import {
  useDeleteSchoolTeachersMutation,
  useGetSchoolTeachersQuery,
} from "@/redux/api/userApi";
import CustomLoader from "../CustomLoader/CustomLoader";
import ErrorPage from "../Error";
import { toast } from "sonner";

const TeachersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pagePostsLimit = 5;

  // Delete functionality
  const [deleteschoolUser, { isLoading: deleteLoading }] =
    useDeleteSchoolTeachersMutation();

  // get the current user
  const {
    data: schoolTeacher,
    isError,
    isLoading,
    error,
  } = useGetSchoolTeachersQuery();

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        {" "}
        <CustomLoader />
      </div>
    );

  if (isError)
    return (
      <ErrorPage
        statusCode={error?.status}
        message="Failed to fetch user table."
      />
    );
  if (!schoolTeacher) return <h1>Emty</h1>;

  const finaldata = schoolTeacher.data.data;

  //

  // Delete functionality
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const res = deleteschoolUser(id);
          if (res.data.success) {
            toast.success("user deleted successfully");
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  const paginatedData = finaldata.slice(
    (currentPage - 1) * pagePostsLimit,
    currentPage * pagePostsLimit,
  );

  // Open modal and set selected user
  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="text-primary-black rounded-lg bg-white bg-opacity-70 p-5 lg:mx-auto lg:w-[80%]">
      <div className="overflow-x-auto bg-white">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#303060]">
              <TableHead className="text-center text-white">Serial</TableHead>
              <TableHead className="text-center text-white">Name</TableHead>

              <TableHead className="text-center text-white">
                Email Address
              </TableHead>
              <TableHead className="text-center text-white">Status</TableHead>
              <TableHead className="text-center text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={row._id} className="text-center">
                <TableCell>
                  {index + 1 + (currentPage - 1) * pagePostsLimit}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell
                  className={`${
                    row.status === "1" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {row.status}
                </TableCell>
                <TableCell>
                  <div className="flex justify-center gap-2">
                    <Button
                      onClick={() => openModal(row)}
                      variant="outline"
                      size="sm"
                      className="text-[#303060]"
                    >
                      <FaEye />
                    </Button>
                    <Button
                      onClick={() => handleDelete(row._id)}
                      size="sm"
                      className="bg-white text-red-600"
                    >
                      {deleteLoading ? <CustomLoader /> : <FaTrash />}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 text-center">
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(finaldata.length / pagePostsLimit)}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Update User Modal */}
      {selectedUser && (
        <UpdateUserModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default TeachersTable;
