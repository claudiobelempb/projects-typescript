import { produce } from 'immer';
import { EnumCycleAction } from './actions';

export type CycleType = {
  cycleId: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  endDate?: Date;
  finishedDate?: Date;
};

type CycleStateType = {
  cycles: CycleType[];
  activeCycleId: string | null;
};

export function CyclesReducer(state: CycleStateType, action: any) {
  const currentCycleIndex = state.cycles.findIndex(cycle => {
    return cycle.cycleId === state.activeCycleId;
  });
  switch (action.type) {
    case EnumCycleAction.ADD_NEW_CYCLE:
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.cycleId
      // };
      return produce(state, draft => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.cycleId;
      });
    case EnumCycleAction.INTERRUPT_CURRENT_CYCLE: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map(cycle => {
      //     if (cycle.cycleId === state.activeCycleId) {
      //       return { ...cycle, endDate: new Date() };
      //     } else {
      //       return cycle;
      //     }
      //   }),
      //   activeCycleId: null
      // };

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, draft => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].endDate = new Date();
      });
    }
    case EnumCycleAction.MARK_CURRENT_CYCLE_FINISHED: {
      // return {
      //   ...state,
      //   cycles: state.cycles.map(cycle => {
      //     if (cycle.cycleId === state.activeCycleId) {
      //       return { ...cycle, finishedDate: new Date() };
      //     } else {
      //       return cycle;
      //     }
      //   })
      // };

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, draft => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    }
    default:
      return state;
  }
}
