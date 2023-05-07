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
        return;
      }

      state.designes[designIndex] = design;
    },

    setDesignes(state, designes: DesignItem[]) {
      state.designes = designes;
    }
  },

  actions: {
    updateDesign({commit}, design: DesignItem) {
      commit('setDesignes', design);
    },

    getDesignes({ commit }) {
      DesignDataService.getAll()
        .then(({ data }: any) => {
          commit('setDesignes', data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  },
}

export default designesModule;
