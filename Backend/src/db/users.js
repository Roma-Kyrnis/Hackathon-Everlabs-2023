const users = [
  {
    id: "Vasya",
    email: "vasya@gmail.com",
    username: "Vasya",
  },
  {
    id: "Petro",
    email: "petro@gmail.com",
    username: "Petro",
  },
  {
    id: "Olezha",
    email: "olezha@gmail.com",
    username: "Olezha",
  },
];

export const get = async (id) => {
  const chooseUser = users.find((user) => user.id === id);
  return chooseUser;
};
