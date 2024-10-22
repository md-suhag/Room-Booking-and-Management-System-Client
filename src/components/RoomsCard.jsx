import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export function RoomsCard({ room }) {
  return (
    <Card className="w-full max-w-[350px]">
      <CardHeader className="relative">
        <Image
          className="rounded"
          src={`http://localhost:5000/uploads/${room.picture[0]}`}
          width={400}
          height={400}
        />
        <h3 className="absolute z-[5] right-4 bottom-4 bg-[#CE1C43] text-white rounded-lg p-2 ">
          $ {room.rent}
        </h3>
      </CardHeader>
      <CardContent>
        <CardTitle className="flex justify-between mb-1  gap-1">
          {room.title}
        </CardTitle>
        <CardDescription> {room.facilities}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-start">
        <Button>
          <Link href={`/rooms/${room._id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
