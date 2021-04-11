import { CommonState } from '@/interfaces';
import mutations from './mutations';

const actions = {
  async actionIncreaseCounter(state: CommonState): Promise<void> {
    mutations.incrementCounter(state);
  },
};

export const actionIncreaseCounter = actions.actionIncreaseCounter;

export default actions;
