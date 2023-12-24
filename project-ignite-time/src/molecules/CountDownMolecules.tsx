import { BoxAtoms } from '@atoms/BoxAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { CycleContext } from '@contexts/CyclesContext';
import { TimerNumberMolecules } from '@molecules/TimerNumberMolecules';

import { differenceInSeconds } from 'date-fns';
import { useContext, useEffect } from 'react';
import { useTheme } from 'styled-components';

export function CountDownMolecules() {
  const { variant } = useTheme();

  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    markCurrentCycleAsFinished,
    handleAmountSecondsPassed
  } = useContext(CycleContext);
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;
  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    let interval: number;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate)
        );

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished();
          handleAmountSecondsPassed(totalSeconds);
          clearInterval(interval);
        } else {
          handleAmountSecondsPassed(secondsDifference);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    handleAmountSecondsPassed
  ]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  return (
    <BoxAtoms
      $flex={{
        $flexDirection: 'row',
        $columnGap: 1,
        $justifyContent: 'center'
      }}
      $space={{ $pdy: 's12' }}
    >
      <TimerNumberMolecules displayNumber={minutes[0]} />
      <TimerNumberMolecules displayNumber={minutes[1]} />
      <BoxAtoms
        $flex={{
          $justifyContent: 'center',
          $alingItems: 'center',
          $rowGap: 2
        }}
      >
        <IconAtom type='FaCircle' size={32} color={variant.gray_100} />
        <IconAtom type='FaCircle' size={32} color={variant.gray_100} />
      </BoxAtoms>
      <TimerNumberMolecules displayNumber={seconds[0]} />
      <TimerNumberMolecules displayNumber={seconds[1]} />
    </BoxAtoms>
  );
}
