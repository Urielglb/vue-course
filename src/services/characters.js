import axios from "axios";

const apiClient = new axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getCharacters() {
    try {
      const { data } = await apiClient.get("/characters");
      return data;
    } catch (error) {
      alert(error);
    }
  },
  async getCharacterById(id) {
    try {
      const { data } = await apiClient.get(`/characters/${id}`);
      return data;
    } catch (error) {
      alert(error);
    }
  },
};
