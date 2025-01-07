import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, DeleteIcon } from "lucide-react";
import React from "react";

const RecentUser = () => {
  const invoices = [
    {
      firstname: "Moazzem",
      lastname: "Hossen",
      email: "tiyonbhuiyan.201@gmail.com",
    },
    {
      firstname: "Moazzem",
      lastname: "Hossen",
      email: "tiyonbhuiyan.201@gmail.com",
    },
    {
      firstname: "Moazzem",
      lastname: "Hossen",
      email: "tiyonbhuiyan.201@gmail.com",
    },
    {
      firstname: "Moazzem",
      lastname: "Hossen",
      email: "tiyonbhuiyan.201@gmail.com",
    },
    {
      firstname: "Moazzem",
      lastname: "Hossen",
      email: "tiyonbhuiyan.201@gmail.com",
    },
    {
      firstname: "Moazzem",
      lastname: "Hossen",
      email: "tiyonbhuiyan.201@gmail.com",
    },
  ];
  return (
    <div className="my-10 mb-10 w-[80%] rounded-md bg-white">
      <Table>
        <TableHeader className="bg-black text-white">
          <TableRow className="">
            <TableHead className="">FirstName</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.firstname}</TableCell>
              <TableCell>{invoice.lastname}</TableCell>
              <TableCell>{invoice.email}</TableCell>
              <TableCell className="text-right">
                <Button className="bg-white text-danger">
                  <DeleteIcon className="flex justify-end" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentUser;
