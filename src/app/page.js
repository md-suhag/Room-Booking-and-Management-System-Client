import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RoomsCard } from "@/components/RoomsCard";
import AllRooms from "@/components/AllRooms";

export default function Home() {
  return (
    <main className="container px-4 mx-auto">
      <AllRooms />
    </main>
  );
}
