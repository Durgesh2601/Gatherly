import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

const SocketHandler = (req: NextApiRequest, res: NextApiResponse<any>) => {
    console.log("socket handler called");
  if ((res.socket as any).server.io) {
    console.log("socket is already running");
    return;
  } else {
    const io = new Server((res.socket as any).server);
    (res.socket as any).server.io = io;

    io.on("connection", (socket) => {
      console.log("server is connected");
    });
  }
  res.end();
};

export default SocketHandler;
