import { createSlice, createAction } from "@reduxjs/toolkit";
import bookingService from "../../services/booking.service";
import { nanoid } from "nanoid";
import { getCurrentUserId } from "./users";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    bookingsRequested: (state) => {
      state.isLoading = true;
    },
    bookingsReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    bookingsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    bookingCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    bookingRemoved: (state, action) => {
      state.entities = state.entities.filter((b) => b._id !== action.payload);
    },
  },
});

const { reducer: bookingsReducer, actions } = bookingsSlice;
const {
  bookingsRequested,
  bookingsReceved,
  bookingsRequestFailed,
  bookingCreated,
  bookingRemoved,
} = actions;

const addBookingRequested = createAction("bookings/addBookingRequested");
const removeBookingRequested = createAction("bookings/removeBookingRequested");

export const loadBookingsListForRoom = (roomId) => async (dispatch) => {
  dispatch(bookingsRequested());
  try {
    const { content } = await bookingService.getBookingsForRoom(roomId);
    dispatch(bookingsReceved(content));
  } catch (error) {
    dispatch(bookingsRequestFailed(error.message));
  }
};

export const createBooking = (payload) => async (dispatch, getState) => {
  dispatch(addBookingRequested());
  const booking = {
    ...payload, //даты
    _id: nanoid(),
    created_at: Date.now(),
    userId: getCurrentUserId()(getState()),
  };

  try {
    const { content } = await bookingService.createBooking(booking);
    dispatch(bookingCreated(content));
  } catch (error) {
    dispatch(bookingsRequestFailed(error.message));
  }
};

export const removeBooking = (bookingId) => async (dispatch) => {
  dispatch(removeBookingRequested());
  try {
    const { content } = await bookingService.removeBooking(bookingId);
    if (content === null) {
      dispatch(bookingRemoved(bookingId));
    }
  } catch (error) {
    dispatch(bookingsRequestFailed(error.message));
  }
};

export const getBookings = () => (state) => state.bookings.entities;
export const getBookingsLoadingStatus = () => (state) =>
  state.bookings.isLoading;

export default bookingsReducer;
