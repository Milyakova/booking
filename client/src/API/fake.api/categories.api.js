                                    export const categoriesObject = {
  econom: { _id: "67rdca3eeb7f6fgeed471818", name: "Эконом" },
  comfort: { _id: "67rdca3eeb7f6fgeed471820", name: "Комфорт" },
  lux: { _id: "67rdca3eeb7f6fgeed471814", name: "Люкс" },
  cottage: { _id: "67rdca3eeb7f6fgeed471822", name: "Коттедж" },
};
export const categories = [
  { _id: "67rdca3eeb7f6fgeed471818", name: "Эконом" },
  { _id: "67rdca3eeb7f6fgeed471820", name: "Комфорт" },
  { _id: "67rdca3eeb7f6fgeed471814", name: "Люкс" },
  { _id: "67rdca3eeb7f6fgeed471822", name: "Коттедж" },
];
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(categoriesObject);
    }, 2000);
  });

export default {
  fetchAll,
};
