import { useEffect } from "react";
import { useSocket } from "@/context/socket";
import usePeer from "@/hooks/usePeer";
import useMediaStream from "@/hooks/useMediaStream";

const Room = () => {
  const socket = useSocket();
  const { peer, peerId } = usePeer();
  const { stream } = useMediaStream();

  useEffect(() => {
    if (stream) {
      console.log("stream", stream);
      // Do something with the stream
    }
  }, [stream]);

  return <div>Room</div>;
};

export default Room;
