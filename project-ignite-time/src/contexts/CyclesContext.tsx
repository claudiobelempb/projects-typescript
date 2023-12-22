import { ReactNode, createContext, useReducer, useState } from 'react';

type CreateCycleData = {
  task: string;
  minutesAmount: number;
};

type CycleType = {
  cycleId: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  endDate?: Date;
  finishedDate?: Date;
};

type CycleContextType = {
  activeCycle: CycleType | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  cycles: CycleType[];
  markCurrentCycleAsFinished: () => void;
  handleAmountSecondsPassed: (second: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
};

type CycleContextProviderProps = {
  children: ReactNode;
};

export const CycleContext = createContext({} as CycleContextType);

type CycleStateType = {
  cycles: CycleType[];
  activeCycleId: string | null;
};

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const [cyclesState, dispatch] = useReducer(
    (state: CycleStateType, action: any) => {
      switch (action.type) {
        case 'ADD_NEW_CYCLE':
          return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycle],
            activeCycleId: action.payload.newCycle.cycleId
          };
        case 'INTERRUPT_CURRENT_CYCLE':
          return {
            ...state,
            cycles: state.cycles.map(cycle => {
              if (cycle.cycleId === state.activeCycleId) {
                return { ...cycle, endDate: new Date() };
              } else {
                return cycle;
              }
            }),
            activeCycleId: null
          };
        case 'MARK_CURRENT_CYCLE_FINISHED':
          return {
            ...state,
            cycles: state.cycles.map(cycle => {
              if (cycle.cycleId === state.activeCycleId) {
                return { ...cycle, finishedDate: new Date() };
              } else {
                return cycle;
              }
            })
          };
        default:
          return state;
      }
    },
    {
      cycles: [],
      activeCycleId: null
    }
  );

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find(cycle => cycle.cycleId === activeCycleId);

  function createNewCycle(data: CreateCycleData) {
    const cycleId = String(new Date().getTime());
    const newCycle: CycleType = {
      cycleId,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    };
    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: { newCycle }
    });
    handleAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: { activeCycleId }
    });
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: 'MARK_CURRENT_CYCLE_FINISHED',
      payload: { activeCycleId }
    });
  }

  function handleAmountSecondsPassed(second: number) {
    setAmountSecondsPassed(second);
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        handleAmountSecondsPassed,
        createNewCycle,
        interruptCurrentCycle
      }}
    >
      {children}
    </CycleContext.Provider>
  );
}
