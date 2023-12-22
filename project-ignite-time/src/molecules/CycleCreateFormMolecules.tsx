import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { InputAtoms } from '@atoms/InputAtoms';
import { LabelAtoms } from '@atoms/LabelAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { CycleContext } from '@contexts/CyclesContext';

import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';

export function CycleCreateFormMolecules() {
  const { activeCycle } = useContext(CycleContext);
  const { register } = useFormContext();

  return (
    <BoxAtoms
      $flex={{
        $flexDirection: 'row',
        $alingItems: 'center',
        $columnGap: 0.5
      }}
    >
      <BoxAtoms
        $flex={{
          $flexDirection: 'row',
          $alingItems: 'center',
          $columnGap: 0.5
        }}
      >
        <LabelAtoms htmlFor='task'>Vou trabalhar em</LabelAtoms>
        <InputAtoms
          $flex={{ $flex: 1 }}
          placeholder='Dê um nome para o seu projeto'
          $border={{ $borderBottom: { borderColor: 'gray_300' } }}
          list='task-suggestions'
          {...register('task', { required: true })}
          disabled={!!activeCycle}
        />

        <datalist id='task-suggestions'>
          <option value='projeto 01' />
          <option value='projeto 02' />
          <option value='projeto 03' />
          <option value='projeto 04' />
        </datalist>
      </BoxAtoms>
      <BoxAtoms
        $flex={{
          $flexDirection: 'row',
          $alingItems: 'center',
          $columnGap: 0.5
        }}
      >
        <LabelAtoms htmlFor='minutesAmount'>durante</LabelAtoms>
        <ButtonAtoms type='button' $width={{ $minWidth: 5 }}>
          <IconAtom type='FaMinus' />
        </ButtonAtoms>
        <InputAtoms
          type='number'
          placeholder='00'
          $border={{ $borderBottom: { borderColor: 'gray_300' } }}
          min={5}
          max={60}
          step={5}
          $text={{ $textAlign: 'center' }}
          id='minutesAmount'
          $width={{ $maxWidth: 6 }}
          {...register('minutesAmount', { valueAsNumber: true })}
          disabled={!!activeCycle}
        />
        <ButtonAtoms type='button' $width={{ $minWidth: 5 }}>
          <IconAtom type='FaPlus' />
        </ButtonAtoms>
        <TextAtoms as='span'>minutos</TextAtoms>
      </BoxAtoms>
    </BoxAtoms>
  );
}
