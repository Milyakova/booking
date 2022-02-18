import React, { useState, useEffect } from "react";
import Pagination from "../../common/pagination";
import { paginate } from "../../../utils/paginate";
import GroupList from "../../common/groupList";
import PropTypes from "prop-types";
import RoomPage from "../roomPage";
import RoomsTable from "../../ui/roomsTable";
import API from "../../../API";
import _ from "lodash";
import { useParams } from "react-router";
import Loader from "../../../utils/loader";
import Search from "../../common/form/search";

const RoomsListPage = () => {
  const params = useParams();
  const { roomId } = params;

  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [rooms, setRooms] = useState();
  const pageSize = 4;
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });
  const [searchingName, setSearchingName] = useState({ value: "" });
  let roomsForBooking = [];

  useEffect(() => {
    console.log("send request rooms", API.rooms);
    API.rooms.fetchAll().then((data) => {
      console.log("DATA", data);
      if (localStorage.getItem("rooms_search")) {
        const roomsSearch = JSON.parse(localStorage.getItem("rooms_search"));
        console.log("ROOMS SEARCH ", roomsSearch);
        console.log(Date.parse(roomsSearch.checkin));
        let filteredRoomsByCount = data.filter(
          (room) =>
            Number(room.guests_count) + Number(room.guests_additionally) >=
            roomsSearch.count
        );
        roomsForBooking = filteredRoomsByCount.filter((room) =>
          room.bookings?.every(
            (booking) =>
              Date.parse(booking.checkin) >= Date.parse(roomsSearch.checkout) ||
              Date.parse(booking.checkout) <= Date.parse(roomsSearch.checkin)
          )
        );
        setRooms(roomsForBooking);
      } else {
        setRooms(data);
      }
    });
  }, []);

  useEffect(() => {
    API.categories.fetchAll().then((dataa) => {
      setCategories(dataa);
    });
  }, []);
  const handleDelete = (roomId) => {
    const updatedRooms = rooms.filter((item) => item._id !== roomId);
    setRooms(updatedRooms);
  };
  const handleToggleBookmark = (roomId, status) => {
    if (!status || status === undefined) {
      status = true;
    } else {
      status = false;
    }
    const updatedBookmark = rooms.map((item) => {
      if (item._id === roomId) {
        item.bookmark = status;
      }
      return item;
    });

    setRooms(updatedBookmark);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const handleItemSelect = (item) => {
    setSelectedCategory(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleSort = (item) => {
    setSortBy(item);
  };

  if (rooms) {
    let filteredRooms = [];
    if (selectedCategory) {
      filteredRooms = rooms.filter(
        (room) =>
          JSON.stringify(room.category) === JSON.stringify(selectedCategory)
      );
    } else {
      filteredRooms = rooms;
    }

    if (searchingName.value) {
      filteredRooms = rooms.filter((room) => {
        const r = searchingName.value;
        const regEx = new RegExp(r, "gi");
        return regEx.test(JSON.stringify(room.name));
      });
    }

    const count = filteredRooms.length;
    const sortedRooms = _.orderBy(filteredRooms, [sortBy.path], [sortBy.order]);
    const roomsCrop = paginate(sortedRooms, currentPage, pageSize);

    const clearFilter = () => {
      setSelectedCategory(undefined);
    };

    const handleSearchChange = ({ target }) => {
      setSearchingName((prevState) => ({ ...prevState, value: target.value }));
      setSelectedCategory(undefined);
      console.log("handleSearchChange", searchingName);
    };
    return (
      <>
        {roomId && <RoomPage roomId={roomId} />}
        {!roomId && (
          <div className="d-flex">
            {categories && (
              <div className="d-flex-flex-column flex-shrink-0 p-3">
                <GroupList
                  items={categories}
                  onItemSelect={handleItemSelect}
                  selectedItem={selectedCategory}
                />
                <button className="btn btn-secondary mt2" onClick={clearFilter}>
                  Очистить все
                </button>
              </div>
            )}
            <div className="d-flex flex-column">
              <form>
                <Search
                  value={searchingName.value}
                  onChange={handleSearchChange}
                />
              </form>
              {count > 0 && (
                <RoomsTable
                  rooms={roomsCrop}
                  onSort={handleSort}
                  selectedSort={sortBy}
                  onDelete={handleDelete}
                  onToggleBookmark={handleToggleBookmark}
                />
              )}

              <div className="d-flex justify-content-center">
                <Pagination
                  currentPage={currentPage}
                  itemsCount={count}
                  pageSize={4}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return <Loader />;
};

RoomsListPage.propTypes = {
  rooms: PropTypes.array,
  index: PropTypes.number,
};

export default RoomsListPage;
