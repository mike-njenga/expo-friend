import api from "./axios";
import { Friend } from "../types/friends";

export const getFriends = async (): Promise<Friend[]> => {
  const res = await api.get("/friends");
  return res.data;
};

export const createFriend = async (data: Partial<Friend>) => {
  return api.post("/friends", data); // admin only
};

export const updateFriend = async (id: string, data: Partial<Friend>) => {
  return api.put(`/friends/${id}`, data); // admin only
};
