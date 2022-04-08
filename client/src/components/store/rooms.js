import { createSlice } from "@reduxjs/toolkit";
import roomService from "../../services/room.service";
import localStorageService from "../../services/localStorage.service";

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      dataLoaded: false,
      lastFetch: null,
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false,
      lastFetch: null,
    };
const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    roomsRequested: (state) => {
      state.isLoading = true;
    },
    roomsReceved: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    roomsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: roomsReducer, actions } = roomsSlice;
const { roomsRequested, roomsReceved, roomsRequestFailed } = actions;

export const loadRoomsList = () => async (dispatch) => {
  dispatch(roomsRequested());
  try {
    const { content } = await roomService.get();
    dispatch(roomsReceved(content));
  } catch (error) {
    dispatch(roomsRequestFailed(error.message));
  }
};

export const getRoomsList = () => (state) => state.rooms.entities;

export const getRoomById = (roomId) => (state) => {
  if (state.rooms.entities) {
    return state.rooms.entities.find((r) => r._id === roomId);
  }
};
export default roomsReducer;
