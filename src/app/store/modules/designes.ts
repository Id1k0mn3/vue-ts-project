import { Module } from "vuex/types/index.js";
import { RootState } from "../../../intefaces";
import { DesignItem } from "../../../intefaces";
import DesignDataService from "../../../services/DesignDataServices";

export interface DesignesState {
  designes: DesignItem[];
}

const designesModule: Module<DesignesState, RootState> = {
  namespaced: true,
  state: {
    designes: [],
  },

  mutations: {
    updateDesign(state, design: DesignItem) {
      const designIndex = state.designes.findIndex(({id}) => id === design.id);

      if (designIndex === -1) {
        state.designes.push(design);

        return;
      }

      state.designes[designIndex] = design;
    },

    setDesignes(state, designes: DesignItem[]) {
      state.designes = designes;
    },

    removeDesign(state, designId: Number) {
      state.designes = state.designes.filter(({id}) => id !== designId);
    }
  },

  actions: {
    updateDesign({commit}, design: DesignItem) {
      commit('updateDesign', design);
    },

    getDesignes({ commit }) {
      DesignDataService.getAll()
        .then(({ data }: any) => {
          commit('setDesignes', data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    removeDesign({commit}, designId: Boolean) {
      commit('removeDesign', designId);
    }
  },

  getters: {
    returnDesignes(state) {
      return state.designes;
    },
  },
}

export default designesModule;
