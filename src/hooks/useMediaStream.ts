import { useEffect, useRef, useState } from "react";

const useMediaStream = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const isStreamSet = useRef(false);
  useEffect(() => {
    if (isStreamSet.current) return;
    isStreamSet.current = true;
    (async function initStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setStream(stream);
      } catch (error) {
        console.error("Error accessing media devices.", error);
      }
    })();
  }, []);
  return { stream };
};

export default useMediaStream;
