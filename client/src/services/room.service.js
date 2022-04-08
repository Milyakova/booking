import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const roomEndpoint = "room/";

const roomService = {
  get: async () => {
    const { data } = await httpService.get(roomEndpoint);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(
      roomEndpoint + localStorageService.getroomId(),
      payload
    );
    return data;
  },
};
export default roomService;
