import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";

type SocketContextType = Socket | null;

const SocketContext = createContext<SocketContextType>(null);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<SocketContextType>(null);

  useEffect(() => {
    const connection = io();
    setSocket(connection);
    console.log("socket connected", connection);
    return () => {
      // Clean up the socket connection when the component unmounts
      connection.disconnect();
    };
  }, []);

  socket?.on("connect_error", async (error) => {
    console.log("socket connection error", error);
    await fetch("/api/socket");
  });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
