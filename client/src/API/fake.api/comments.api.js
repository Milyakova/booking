const comments = [
  {
    _id: "67rdca3eeb7f6fg",
    userId: "67rdca3eeb7f6fgeed471815",
    roomId: "8XQ8ZLkVbE48DLWx3g4SsYKZZXsSLQSQM",
    content: "Lorem ipsum dolor",
    created_at: "1633576399367",
  },
  {
    _id: "67rdca3eeb7f6fgdasd",
    roomId: "JM6p9Wyq4CvkcKEWAX3uhbFAnyinokLBQ",
    userId: "67rdca3eeb7f6fgeed471815",
    content: "Lorem ipsum dolor and etc",
    created_at: "1633573058520",
  },
  {
    _id: "67rdca3eeb7f6fgdaasd",
    roomId: "EsoaJyQM5joQci9QN24nTffmsCSBQG8Vt",
    userId: "67rdca3eeb7f6fgeed471815",
    content: "Lorem ipsum dolor and etc",
    created_at: "1633573058520",
  },
];
if (!localStorage.getItem("comments")) {
  localStorage.setItem("comments", JSON.stringify(comments));
}
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(comments);
    }, 200);
  });

const fetchCommentsForRoom = (roomId) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("comments")).filter(
          (c) => c.roomId === roomId
        )
      );
    }, 200);
  });

const add = (data) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const comments = JSON.parse(localStorage.getItem("comments"));
      const newComment = {
        ...data,
        created_at: Date.now(),
        _id: Math.random().toString(36).substr(2, 9),
      };
      comments.push(newComment);
      localStorage.setItem("comments", JSON.stringify(comments));
      resolve(newComment);
    }, 200);
  });

const remove = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const comments = JSON.parse(localStorage.getItem("comments"));
      const newComments = comments.filter((x) => x._id !== id);
      console.log(id);
      console.log(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      resolve(id);
    }, 200);
  });
export default {
  fetchAll,
  fetchCommentsForRoom,
  add,
  remove,
};
