"use client";
import React from "react";
import { RoomsCard } from "./RoomsCard";
import { useGetRoomsQuery } from "@/redux/services/roomsApi";

const AllRooms = () => {
  const { data: rooms, isLoading, error } = useGetRoomsQuery();

  return (
    <section className="min-h-screen py-6 ">
      <h2 className="my-4 text-3xl font-bold text-center">All Rooms</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {rooms &&
          rooms.data.length > 0 &&
          !isLoading &&
          !error &&
          rooms.data.map((room, index) => {
            return <RoomsCard key={room._id} room={room} />;
          })}
      </div>
    </section>
  );
};

export default AllRooms;
