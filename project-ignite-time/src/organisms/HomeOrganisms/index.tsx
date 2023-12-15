import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { FormAtoms } from '@atoms/FormAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { InputAtoms } from '@atoms/InputAtoms';
import { LabelAtoms } from '@atoms/LabelAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TimerNumber } from '@molecules/TimerNumber';
import { useState } from 'react';
import { useTheme } from 'styled-components';

export function HomeOrganisms() {
  const { variant } = useTheme();
  const [status, setStatus] = useState(true);
  return (
    <>
      <FormAtoms
        $flex={{
          $flexDirection: 'column',
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
              id='task'
              list='task-suggestions'
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
            <ButtonAtoms $width={{ $minWidth: 5 }}>
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
            />
            <ButtonAtoms $width={{ $minWidth: 5 }}>
              <IconAtom type='FaPlus' />
            </ButtonAtoms>
            <TextAtoms as='span'>minutos</TextAtoms>
          </BoxAtoms>
        </BoxAtoms>

        <BoxAtoms
          $flex={{
            $flexDirection: 'row',
            $columnGap: 1,
            $justifyContent: 'center'
          }}
          $space={{ $pdy: 's12' }}
        >
          <TimerNumber number={0} />
          <TimerNumber number={0} />
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
          <TimerNumber number={0} />
          <TimerNumber number={0} />
        </BoxAtoms>

        {status ? (
          <ButtonAtoms
            disabled={false}
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
            disabled={false}
            $flex={{
              $flexDirection: 'row',
              $alingItems: 'center',
              $justifyContent: 'center',
              $columnGap: 1
            }}
            $variant={{ $vbackgroud: 'red_700', $vbackgroudHover: 'red_500' }}
          >
            <IconAtom type='FaRegStopCircle' />
            <TextAtoms>Interromper</TextAtoms>
          </ButtonAtoms>
        )}
      </FormAtoms>
    </>
  );
}
