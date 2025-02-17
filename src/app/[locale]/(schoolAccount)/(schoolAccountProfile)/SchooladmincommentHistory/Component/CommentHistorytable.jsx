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
import { CustomPagination } from "@/components/shared/CustomPagination/CustomPagination";
import { Button } from "@/components/ui/button";
import { FaEye } from "react-icons/fa";
import { useGetCommentsQuery } from "@/redux/api/commentsApi";
import CustomLoader from "@/components/CustomLoader/CustomLoader";
import CommentDetailsModal from "./CommentDetailsModal";
import Image from "next/image";
import nodata from "/public/nodata.png";

const CommentHistorytable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pagePostsLimit = 5;

  const { data: commentData, isLoading, error } = useGetCommentsQuery();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <CustomLoader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error?.data?.message}</div>;
  }

  const finalData = commentData?.data;

  const paginatedData = finalData?.slice(
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
              <TableHead className="text-center text-white">Date</TableHead>
              <TableHead className="text-center text-white">Cycle</TableHead>
              <TableHead className="text-center text-white">Name</TableHead>
              <TableHead className="text-center text-white">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData?.length > 0 ? (
              paginatedData.map((row, index) => (
                <TableRow key={row._id} className="text-center">
                  <TableCell>
                    {index + 1 + (currentPage - 1) * pagePostsLimit}
                  </TableCell>
                  <TableCell>
                    {new Date(row.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{row.cycle}</TableCell>
                  <TableCell>{row.prompt.name}</TableCell>
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
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  <div className="flex justify-center">
                    <Image className="w-1/2" alt="No data found" src={nodata} />
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 text-center">
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(finalData?.length / pagePostsLimit)}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Comment Details Modal */}
      {selectedUser && (
        <CommentDetailsModal
          isOpen={isModalOpen}
          onOpenChange={setIsModalOpen}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default CommentHistorytable;
