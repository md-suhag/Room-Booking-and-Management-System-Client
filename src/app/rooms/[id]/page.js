import Image from "next/image";
import React from "react";
import BookingWithDate from "@/components/BookingWithDate";

const RoomDetails = () => {
  return (
    <section className="px-4 py-6">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
        <Image src={"/room1.jpg"} width={300} height={300} alt="room image" />
        <Image src={"/room1.jpg"} width={300} height={300} alt="room image" />
        <Image src={"/room1.jpg"} width={300} height={300} alt="room image" />
        <Image src={"/room1.jpg"} width={300} height={300} alt="room image" />
      </div>
      <h1 className="my-4 text-2xl font-bold md:text-4xl">
        {" "}
        Rajshahi luxarias room, stay in comfort zone
      </h1>
      <p className="text-slate-600">Facilities: fan, light, ac, bath etc</p>
      <h3 className="text-2xl font-semibold ">
        Rent : <span className="text-[#CE1C43]">$40</span>
      </h3>
      <div className="p-4 my-2 border rounded">
        <h4 className="text-2xl font-medium">Book Your Room :</h4>
        <BookingWithDate />
      </div>
    </section>
  );
};

export default RoomDetails;
