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

const TeachersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pagePostsLimit = 5;

  // Sample static data
  const data = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      status: "Active",
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      id: 5,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      id: 6,
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      status: "Active",
    },
  ];

  // Delete functionality
  const handleDelete = () => {
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const paginatedData = data.slice(
    (currentPage - 1) * pagePostsLimit,
    currentPage * pagePostsLimit,
  );

  // Open modal and set selected user
  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#303060]">
              <TableHead className="text-center text-white">Serial</TableHead>
              <TableHead className="text-center text-white">
                First Name
              </TableHead>
              <TableHead className="text-center text-white">
                Last Name
              </TableHead>
              <TableHead className="text-center text-white">
                Email Address
              </TableHead>
              <TableHead className="text-center text-white">Status</TableHead>
              <TableHead className="text-center text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, index) => (
              <TableRow key={row.id} className="text-center">
                <TableCell>
                  {index + 1 + (currentPage - 1) * pagePostsLimit}
                </TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell
                  className={`${
                    row.status === "Active" ? "text-green-600" : "text-red-600"
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
                      onClick={handleDelete}
                      size="sm"
                      className="bg-white text-red-600"
                    >
                      <FaTrash />
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
          totalPages={Math.ceil(data.length / pagePostsLimit)}
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
