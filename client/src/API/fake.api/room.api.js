import { categoriesObject as categories } from "./categories.api";
const qualities = {
  tv: {
    _id: "67rdca3eeb7f6fgeed471198",
    name: "Телевизор",
    color: "primary",
  },
  condition: {
    _id: "67rdca3eeb7f6fgeed471100",
    name: "Кондиционер",
    color: "secondary",
  },
  ownBathroom: {
    _id: "67rdca3eeb7f6fgeed4711012",
    name: "Собственная ванная комната",
    color: "success",
  },
  sauna: {
    _id: "67rdca3eeb7f6fgeed471101",
    name: "Сауна",
    color: "danger",
  },
  view: {
    _id: "67rdca3eeb7f6fgeed471102",
    name: "Вид из окна",
    color: "info",
  },
  wifi: {
    _id: "67rdca3eeb7f6fgeed471103",
    name: "Бесплатный Wi-Fi",
    color: "dark",
  },
  WConTheFloor: {
    _id: "67rdca3eeb7f6fgeed471187",
    name: "Удобства на этаже",
    color: "dark",
  },
  banya: {
    _id: "67rdca3eeb7f6fgeed471546",
    name: "Баня",
    color: "sucсess",
  },
  fireplace: {
    _id: "67rdca3eeb7f6fgeed471734",
    name: "Камин",
    color: "secondary",
  },
  barrell: {
    _id: "67rdca3eeb7f6fgeed471798",
    name: "Хвойная бочка",
    color: "primary",
  },
  grill: {
    _id: "67rdca3eeb7f6fgeed471831",
    name: "Гриль",
    color: "danger",
  },
};

const rooms = [
  {
    _id: "8XQ8ZLkVbE48DLWx3g4SsYKZZXsSLQSQM",
    name: "Эконом 2+1",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    number: 101,
    category: "67rdca3eeb7f6fgeed471818",
    guests_count: 2,
    guests_additionally: 1,
    price: 1700,
    qualities: [qualities.wifi, qualities.WConTheFloor],
    rate: 2.5,
    bookmark: false,
    bookings: [],
  },
  {
    _id: "AYtMENXsd6GWAkBkNjmTZYZbxe4ELXejT",
    name: "Эконом 3+1",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    number: 102,
    category: "67rdca3eeb7f6fgeed471818",
    guests_count: 3,
    guests_additionally: 1,
    price: 2000,
    qualities: ["67rdca3eeb7f6fgeed471103", "67rdca3eeb7f6fgeed471187"],
    rate: 2.4,
    bookmark: false,
    bookings: [{ checkin: "2021-12-12", checkout: "2021-12-15", count: 3 }],
  },
  {
    _id: "H2CUEaKJM97FK4voPkuG7zBLwk9C8M8jB",
    name: "Эконом 4+1",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    number: 103,
    category: "67rdca3eeb7f6fgeed471818",
    guests_count: 4,
    guests_additionally: 1,
    price: 2300,
    qualities: ["67rdca3eeb7f6fgeed471103", "67rdca3eeb7f6fgeed471187"],
    rate: 2.4,
    bookmark: false,
    bookings: [
      { checkin: "2021-12-12", checkout: "2021-12-15", count: 4 },
      { checkin: "2021-12-17", checkout: "2021-12-18", count: 5 },
    ],
  },
  {
    _id: "JM6p9Wyq4CvkcKEWAX3uhbFAnyinokLBQ",
    name: "Эконом 6+2",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    number: 104,
    category: "67rdca3eeb7f6fgeed471818",
    guests_count: 6,
    guests_additionally: 2,
    price: 3000,
    qualities: ["67rdca3eeb7f6fgeed471103", "67rdca3eeb7f6fgeed471187"],
    rate: 2.4,
    bookmark: false,
    bookings: [
      { checkin: "2021-12-21", checkout: "2021-12-23", count: 7 },
      { checkin: "2021-12-30", checkout: "2022-01-03", count: 8 },
    ],
  },
  {
    _id: "EsoaJyQM5joQci9QN24nTffmsCSBQG8Vt",
    name: "Комфорт 2+1",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    number: 201,
    category: "67rdca3eeb7f6fgeed471820",
    guests_count: 2,
    guests_additionally: 1,
    price: 3000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
    ],
    rate: 2.4,
    bookmark: false,
  },
  {
    _id: "HZmARcwX69mnrVSRSg3UCq5Ey4qabcps7",
    name: "Комфорт 2+2",
    number: 202,
    category: "67rdca3eeb7f6fgeed471820",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    guests_count: 2,
    guests_additionally: 2,
    price: 3000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
    ],
    rate: 4.4,
    bookmark: false,
    bookings: [{ checkin: "2021-12-30", checkout: "2022-01-03", count: 4 }],
  },
  {
    _id: "3TR2vT6znNsmcPbBvCWck43n8Cv3WXjc2",
    name: "Комфорт 4+2",
    number: 203,
    category: "67rdca3eeb7f6fgeed471820",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    guests_count: 4,
    guests_additionally: 2,
    price: 3000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
    ],
    rate: 4.6,
    bookmark: false,
    bookings: [{ checkin: "2022-01-05", checkout: "2022-01-07", count: 5 }],
  },
  {
    _id: "7H9d39ryTmFTU22gCjWG3UzJDb4SWtRUv",
    name: "Люкс 2+1",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    number: 301,
    category: "67rdca3eeb7f6fgeed471814",
    guests_count: 2,
    guests_additionally: 1,
    price: 3000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
      "67rdca3eeb7f6fgeed471101",
    ],
    rate: 4.6,
    bookmark: false,
  },
  {
    _id: "BmPJvkvvkF1obebSqSiuvff7RhEGiu6oV",
    name: "Люкс 4+2",
    number: 302,
    category: "67rdca3eeb7f6fgeed471814",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    guests_count: 4,
    guests_additionally: 2,
    price: 3000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
      "67rdca3eeb7f6fgeed471101",
    ],
    rate: 4.6,
    bookmark: false,
  },
  {
    _id: "17ptfzR1rT6u36sY36uicetJbt5ubRGncU",
    name: "Люкс 2+1",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    number: 303,
    category: "67rdca3eeb7f6fgeed471814",
    guests_count: 2,
    guests_additionally: 1,
    price: 3000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
      "67rdca3eeb7f6fgeed471101",
    ],
    rate: 4.6,
    bookmark: false,
  },
  {
    _id: "1835mvPJg73Gdji7Y8twXwddtK5crw5Zxf",
    name: "Люкс 4+2",
    number: 304,
    category: "67rdca3eeb7f6fgeed471814",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    guests_count: 4,
    guests_additionally: 2,
    price: 3000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
      "67rdca3eeb7f6fgeed471101",
    ],
    rate: 4.6,
    bookmark: false,
    bookings: [{ checkin: "2022-01-05", checkout: "2022-01-07", count: 4 }],
  },
  {
    _id: "17nQyAhq28oFoizjZreFxzDNkhMVWdcwAa",
    name: "Люкс 2+1",
    number: 304,
    category: "67rdca3eeb7f6fgeed471814",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    guests_count: 2,
    guests_additionally: 1,
    price: 3000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
      "67rdca3eeb7f6fgeed471101",
    ],
    rate: 4.6,
    bookmark: false,
  },
  {
    _id: "23nQyAhq28oFoizjZreFxzWdcwAa",
    name: "Коттедж 'Романтик'",
    number: 1,
    category: "67rdca3eeb7f6fgeed471822",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    guests_count: 2,
    guests_additionally: 2,
    price: 10000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
      "67rdca3eeb7f6fgeed471734",
      "67rdca3eeb7f6fgeed471831",
      "67rdca3eeb7f6fgeed471798",
    ],
    rate: 5.0,
    bookmark: false,
    bookings: [{ checkin: "2022-01-05", checkout: "2022-01-07", count: 3 }],
  },
  {
    _id: "45nQyAhq28oFoizjZreFxdcwAa",
    name: "Коттедж 'Дом лесника'",
    number: 2,
    category: "67rdca3eeb7f6fgeed471822",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    guests_count: 6,
    guests_additionally: 2,
    price: 12000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
      "67rdca3eeb7f6fgeed471734",
      "67rdca3eeb7f6fgeed471831",
    ],
    rate: 4.9,
    bookmark: false,
    bookings: [{ checkin: "2022-01-03", checkout: "2022-01-07", count: 5 }],
  },
  {
    _id: "78nQyAhq28oFoizVWdcwAa",
    name: "Коттедж 'Дом рыболова'",
    number: 3,
    category: "67rdca3eeb7f6fgeed471822",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    guests_count: 10,
    guests_additionally: 4,
    price: 16000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
      "67rdca3eeb7f6fgeed471546",
      "67rdca3eeb7f6fgeed471734",
      "67rdca3eeb7f6fgeed471831",
    ],
    rate: 5.0,
    bookmark: false,
  },
  {
    _id: "21nQyAhq28oFoicwAa",
    name: "Коттедж 'Домик охотника'",
    number: 4,
    category: "67rdca3eeb7f6fgeed471822",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    guests_count: 18,
    guests_additionally: 4,
    price: 24000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
      "67rdca3eeb7f6fgeed471546",
      "67rdca3eeb7f6fgeed471734",
      "67rdca3eeb7f6fgeed471831",
    ],
    rate: 4.6,
    bookmark: false,
    bookings: [{ checkin: "2021-12-31", checkout: "2022-01-03", count: 20 }],
  },
  {
    _id: "93nQyAhhMVWdcwAa",
    name: "Коттедж 'Хвойная бочка'",
    number: 5,
    category: "67rdca3eeb7f6fgeed471822",
    photo:
      "https://images.pexels.com/photos/6394711/pexels-photo-6394711.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    guests_count: 24,
    guests_additionally: 6,
    price: 36000,
    qualities: [
      "67rdca3eeb7f6fgeed471103",
      "67rdca3eeb7f6fgeed471102",
      "67rdca3eeb7f6fgeed4711012",
      "67rdca3eeb7f6fgeed471198",
      "67rdca3eeb7f6fgeed471100",
      "67rdca3eeb7f6fgeed471546",
      "67rdca3eeb7f6fgeed471734",
      "67rdca3eeb7f6fgeed471831",
      "67rdca3eeb7f6fgeed471798"
    ],
    rate: 4.6,
    bookmark: false,
    bookings: [],
  },
];
if (!localStorage.getItem("rooms")) {
  localStorage.setItem("rooms", JSON.stringify(rooms));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("rooms")));
    }, 2000);
  });
const update = (id, data) =>
  new Promise((resolve) => {
    const rooms = JSON.parse(localStorage.getItem("rooms"));
    const roomIndex = rooms.findIndex((r) => r._id === id);
    rooms[roomIndex] = { ...rooms[roomIndex], ...data };
    localStorage.setItem("rooms", JSON.stringify(rooms));
    resolve(rooms[roomIndex]);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("rooms")).find(
          (room) => room._id === id
        )
      );
    }, 1000);
  });
export default {
  fetchAll,
  getById,
  update,
};
