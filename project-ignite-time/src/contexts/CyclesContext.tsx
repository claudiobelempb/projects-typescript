import { CycleType, CyclesReducer } from '@redurcers/cycles/reducer';
import { differenceInSeconds } from 'date-fns';
import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState
} from 'react';
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction
} from 'redurcers/cycles/actions';

type CreateCycleData = {
  task: string;
  minutesAmount: number;
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

export function CycleContextProvider({ children }: CycleContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    CyclesReducer,
    {
      cycles: [],
      activeCycleId: null
    },
    initialState => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-storage-v1.0.0'
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );
  const { cycles, activeCycleId } = cyclesState;
  const activeCycle = cycles.find(cycle => cycle.cycleId === activeCycleId);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate));
    }
    return 0;
  });
  function createNewCycle(data: CreateCycleData) {
    const cycleId = String(new Date().getTime());
    const newCycle: CycleType = {
      cycleId,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    };
    dispatch(addNewCycleAction(newCycle));
    handleAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction());
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
  }

  function handleAmountSecondsPassed(second: number) {
    setAmountSecondsPassed(second);
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);
    localStorage.setItem('@ignite-timer:cycles-storage-v1.0.0', stateJSON);
  }, [cycles, cyclesState]);

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
