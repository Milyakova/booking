import React from "react";
import { useParams } from "react-router";
import RoomsListPage from "../components/pages/roomsListPage";
import RoomPage from "../components/pages/roomPage";

const Rooms = () => {
  const params = useParams();
  const { roomId } = params;
  return <>{roomId ? <RoomPage roomId={roomId} /> : <RoomsListPage />}</>;
};

export default Rooms;
