import { useEffect, useRef, useState } from "react";
import { Peer } from "peerjs";

const usePeer = () => {
  const [peer, setPeer] = useState(null);
  const [peerId, setPeerId] = useState("");
  const isPeerSet = useRef(false);

  useEffect(() => {
    if(isPeerSet.current) return;
    isPeerSet.current = true;
    (async function initPeer() {
      const gatherlyPeer = new Peer();
      setPeer(peer);
      gatherlyPeer.on("open", (id) => {
        setPeerId(id);
        console.log("peer id", id);
      });
    })();
  }, []);

  return { peer, peerId };
};

export default usePeer;
