import { createStore } from 'vuex';
import { RootState } from "../../intefaces";
import designesModule from "./modules/designes.ts";

export const store = createStore<RootState>({
  modules: {
    designes: designesModule,
  },
});

export default store;