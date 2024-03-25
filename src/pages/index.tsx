import { useSocket } from "@/context/socket";
import { useEffect } from "react";

export default function Home() {
  const socket = useSocket();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log("socket connected", socket);
    })
  }, [socket]);
  return (
    <div>
      <h1>Socket.io with Next.js</h1>
    </div>
  );
}
