import { CycleType } from './reducer';

export enum EnumCycleAction {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_FINISHED = 'MARK_CURRENT_CYCLE_FINISHED'
}

export type TypeCycleAction = keyof typeof EnumCycleAction;

export function addNewCycleAction(newCycle: CycleType) {
  return {
    type: EnumCycleAction.ADD_NEW_CYCLE,
    payload: {
      newCycle
    }
  };
}

export function interruptCurrentCycleAction() {
  return {
    type: EnumCycleAction.INTERRUPT_CURRENT_CYCLE
  };
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: EnumCycleAction.MARK_CURRENT_CYCLE_FINISHED
  };
}
