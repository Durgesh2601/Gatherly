import { useRouter } from "next/router";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [currRoomId, setCurrRoomID] = useState<string>("");
  const router = useRouter();

  const createAndJoinRoom = () => {
    const roomId = uuidv4();
    router.push(`/${roomId}`);
  };

  const joinRoom = () => {
    if (!currRoomId) return alert("Please enter a room ID");
    router.push(`/${currRoomId}`);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Gatherly</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <input
          type="text"
          placeholder="Enter Room ID"
          value={currRoomId}
          onChange={(event) => setCurrRoomID(event?.target?.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-600 transition duration-300"
          onClick={joinRoom}
        >
          Join Room
        </button>
        <div className="text-center text-gray-500 mb-4">OR</div>
        <button
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300"
          onClick={createAndJoinRoom}
        >
          Create a new Room
        </button>
      </div>
    </div>
  );
}
