import { createStore } from 'vuex';
import actions from './modules/actions.ts';

const store = createStore({
    actions: {
        ...actions
    }
});

export default store;