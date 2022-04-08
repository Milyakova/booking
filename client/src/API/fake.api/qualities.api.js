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
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(qualities);
    }, 2000);
  });

export default {
  fetchAll,
};
