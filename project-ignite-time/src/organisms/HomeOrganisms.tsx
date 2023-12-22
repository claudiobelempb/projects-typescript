import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { FormAtoms } from '@atoms/FormAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { CycleContext } from '@contexts/CyclesContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { CountDownMolecules } from '@molecules/CountDownMolecules';
import { CycleCreateFormMolecules } from '@molecules/CycleCreateFormMolecules';
import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';

const createCycleFormValidaonSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60)
});

export type TaksType = zod.infer<typeof createCycleFormValidaonSchema>;

export function HomeOrganisms() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CycleContext);

  const newCycleFrom = useForm<TaksType>({
    resolver: zodResolver(createCycleFormValidaonSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  });

  const { handleSubmit, watch, reset } = newCycleFrom;

  function handleCreateNewCycle(data: TaksType) {
    createNewCycle(data);
    reset();
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <>
      <FormAtoms
        $flex={{
          $flexDirection: 'column',
          $alingItems: 'center',
          $columnGap: 0.5
        }}
        onSubmit={handleSubmit(handleCreateNewCycle)}
      >
        <FormProvider {...newCycleFrom}>
          <CycleCreateFormMolecules />
        </FormProvider>
        <CountDownMolecules />

        {!activeCycle ? (
          <ButtonAtoms
            type='submit'
            disabled={isSubmitDisabled}
            $flex={{
              $flexDirection: 'row',
              $alingItems: 'center',
              $justifyContent: 'center',
              $columnGap: 1
            }}
            $variant={{
              $vbackgroud: 'green_700',
              $vcolor: 'white',
              $vbackgroudHover: 'green_100'
            }}
          >
            <IconAtom type='FaPlay' />
            <TextAtoms>começar</TextAtoms>
          </ButtonAtoms>
        ) : (
          <ButtonAtoms
            type='button'
            disabled={false}
            $flex={{
              $flexDirection: 'row',
              $alingItems: 'center',
              $justifyContent: 'center',
              $columnGap: 1
            }}
            $variant={{ $vbackgroud: 'red_700', $vbackgroudHover: 'red_500' }}
            onClick={interruptCurrentCycle}
          >
            <IconAtom type='FaRegStopCircle' />
            <TextAtoms>Interromper</TextAtoms>
          </ButtonAtoms>
        )}
      </FormAtoms>
    </>
  );
}
