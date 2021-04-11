import { CommonState } from '@/interfaces';

const mutations = {
  incrementCounter(state: CommonState) {
    state.counter++;
  },
};

export default mutations;
