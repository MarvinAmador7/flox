import Vue from 'vue';
import Vuex from 'vuex'

import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    searchTitle: '',
    userFilter: '',
    loading: false,
    clickedMoreLoading: false,
    paginator: null,
    colorScheme: ''
  },
  mutations,
  actions
});