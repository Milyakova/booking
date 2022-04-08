import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import QualitiesList from "../../ui/qualities";
// import API from "../../../API";
import CommentForm from "../../ui/commentForm";
import Comments from "../../ui/comments";
import Loader from "../../../utils/loader";

import { useSelector } from "react-redux";
import { getRoomById } from "../../store/rooms";

const RoomPage = ({ roomId }) => {
  const room = useSelector(getRoomById(roomId));
  // const [room, setRoom] = useState();
  // const [rooms, setRooms] = useState();
  // const [comments, setComments] = useState();

  // useEffect(() => {
  //   API.rooms.getById(roomId).then((room) => {
  //     console.log("room IN roomPAGE,", room);
  //     setRoom(room);
  //   });
  // }, []);

  // useEffect(() => {
  //   API.rooms.fetchAll().then((data) => {
  //     setRooms(data);
  //   });
  // }, []);

  // useEffect(() => {
  //   API.comments.fetchCommentsForRoom(roomId).then((data) => {
  //     setComments(data);
  //   });
  // }, []);

  // const addComment = (comment) => {
  //   API.comments.add(comment);
  //   API.comments.fetchCommentsForroom(roomId).then((data) => setComments(data));
  // };
  // const removeComment = (id) => {
  //   API.comments.remove(id);
  //   API.comments.fetchCommentsForroom(roomId).then((data) => setComments(data));
  // };
  // console.log("COMMENTSFORroom", comments);
  if (room) {
    return (
      <>
        <div class="card mb-3">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Номер {room.name}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <span className="ms-2">{room.rate}</span>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <div className=" card-body d-flex flex-column justify-content-center text-center ">
            <h5 className="card-title">
              <span>Qualities</span>
            </h5>
            <p className="card-text">
              <QualitiesList qualities={room.qualities} />
            </p>
          </div>
        </div>
        <div className="col-md-8">
          <Comments />
        </div>
        {/* <div className="col-md-8">
          Комментарии
          {rooms ? (
            <CommentForm forId={roomId} rooms={rooms} add={addComment} />
          ) : (
            <Loader />
          )}
          {rooms && comments ? (
            <Comments
              roomId={room._id}
              rooms={rooms}
              commentsForroom={comments}
              remove={removeComment}
            />
          ) : (
            <Loader />
          )}
        </div> */}
      </>
    );
  }
  return <Loader />;
};

export default RoomPage;
RoomPage.propTypes = {
  roomId: PropTypes.string.isRequired,
  rooms: PropTypes.array,
};
