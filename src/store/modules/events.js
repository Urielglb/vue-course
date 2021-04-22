import characterService from "@/services/characters";

export const state = {
  events: [],
  eventsTotal: 0,
};

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENTS_TOTAL(state, eventsTotal) {
    state.eventsTotal = eventsTotal;
  },
  SET_PER_PAGE(state, page) {
    state.page = page;
  },
};

export const actions = {
  async getEvents({ commit, rootState }, { page }) {
    const events = await characterService.getCharacters(
      rootState.perPage,
      page
    );
    commit("SET_EVENTS", events.data);
    commit("SET_PAGES", Math.ceil(events.headers["x-total-count"] / 3));
  },
};

export const getters = {
  getElements(state) {
    return state.events 
  },
};
