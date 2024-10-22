import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RoomsCard } from "@/components/RoomsCard";
import AllRooms from "@/components/AllRooms";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <AllRooms />
    </main>
  );
}
