import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
// constante para saber si estamos en desarrollo o en produccion
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state,
  getters,
  actions,
  mutations
});
