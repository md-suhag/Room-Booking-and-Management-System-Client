"use client";
import {
  useDeleteRoomMutation,
  useGetRoomsQuery,
} from "@/redux/services/roomsApi";
import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import DeleteDialog from "@/components/dashboard/DeleteDialog";
import { toast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";

const AllAvailableRooms = () => {
  const token = useSelector((state) => state.authR.token);
  const { data: rooms, isLoading, error } = useGetRoomsQuery();
  const [deleteRoom] = useDeleteRoomMutation();

  // Handle the delete room logic
  const handleDelete = async (id) => {
    try {
      await deleteRoom({ id, token });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error! Failed to Delete!",
      });
      console.log("Failed to delete room:", error);
    }
  };

  if (isLoading) {
    return <p>Loading all rooms...</p>;
  }

  if (error) {
    return <p>Error fetching rooms. Please try again later.</p>;
  }

  return (
    <div className="w-full">
      {rooms?.data.length === 0 ? (
        <p>No rooms available.</p>
      ) : (
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Picture</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rooms.data.map((room) => (
              <TableRow key={room._id}>
                <TableCell className="font-medium">
                  <Image
                    width={50}
                    height={50}
                    alt={room.title}
                    src={`https://room-booking-and-management-system-server.onrender.com/uploads/${room.picture[0]}`}
                  />
                </TableCell>
                <TableCell>{room.title}</TableCell>
                <TableCell>{room.rent}</TableCell>
                <TableCell className="flex gap-1">
                  <Button className="text-xs" variant="outline">
                    Edit
                  </Button>
                  <DeleteDialog handleDelete={handleDelete} roomId={room._id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default AllAvailableRooms;
