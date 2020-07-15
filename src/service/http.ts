import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3333",
});

export const getUsers = async () => {
  const { data } = await http.get("/users");
  return data;
};

export const getUserById = async (id: number) => {
  const { data } = await http.get(`/users/${id}`);
  return data;
};

export const getPosts = async () => {
  const { data } = await http.get("/posts");
  return data;
};
