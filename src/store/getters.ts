import { CommonState } from '@/interfaces';

const getters = {
  getCounter(state: CommonState) {
    return state.counter;
  },
};

export default getters;
