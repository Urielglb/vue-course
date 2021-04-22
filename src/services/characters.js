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
  async getCharacters(perPage, page) {
    try {
      const response = await apiClient.get(
        `/characters?_limit=${perPage}&_page=${page}`
      );
      return response;
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
  async postCharacter(character) {
    try {
      await apiClient.post("/characters", character);
    } catch (error) {
      alert(error);
    }
  },
};
