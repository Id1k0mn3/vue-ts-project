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
    setDesignes(state, designes: DesignItem[]) {
      state.designes = designes;
    }
  },

  actions: {
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
