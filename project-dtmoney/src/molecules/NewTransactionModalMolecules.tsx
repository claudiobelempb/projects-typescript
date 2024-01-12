import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { FormAtoms } from '@atoms/FormAtoms';
import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { InputAtoms } from '@atoms/InputAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useState } from 'react';

export function NewTransactionModalMolecules() {
  const [selected, setSelected] = useState(true);

  function handleSelected(selected: boolean) {
    setSelected(!selected);
  }
  return (
    <>
      <VBoxAtoms $spacings={{ $mt: 1 }}>
        <Dialog.Title asChild>
          <TextAtoms
            $fonts={{ $size: 2, $weigh: '700' }}
            $colors={{ $color: 'gray100' }}
            $spacings={{ $mb: 3.2 }}
          >
            Nova transação
          </TextAtoms>
        </Dialog.Title>
        <FormAtoms $flex={{ $rowGap: 1.6 }}>
          <InputAtoms
            $colors={{
              $input: { $colors: 'gray800' },
              $placeholder: { $colors: 'gray300' }
            }}
            type='text'
            placeholder='Descrição'
            required
          />
          <InputAtoms
            $colors={{
              $input: { $colors: 'gray800' },
              $placeholder: { $colors: 'gray300' }
            }}
            type='number'
            placeholder='Preço'
            required
          />
          <InputAtoms
            $colors={{
              $input: { $colors: 'gray800' },
              $placeholder: { $colors: 'gray300' }
            }}
            type='text'
            placeholder='Categria'
            required
          />

          <RadioGroup.Root>
            <HBoxAtoms $flex={{ $columnGap: 1 }}>
              <RadioGroup.Item value='income' asChild>
                <ButtonAtoms
                  onClick={() => handleSelected(selected)}
                  type='button'
                  $buttom={{
                    $selected: {
                      $active: selected
                    },
                    $background: {
                      $color: {
                        $color: 'gray600',
                        $hover: 'gray600'
                      }
                    },
                    $colors: {
                      $color: {
                        $color: 'gray100',
                        $hover: 'gray100'
                      },

                      $icon: {
                        $color: 'green700',
                        $hover: 'green700'
                      }
                    },
                    $spacings: {
                      $mt: 2.4
                    },
                    $fonts: { $size: 1.6, $weigh: '700' },
                    $title: 'Entrada',
                    $height: { $minHeight: 5.8 },
                    $icons: {
                      $type: 'ArrowCircleUp',
                      $size: 24
                    }
                  }}
                />
              </RadioGroup.Item>
              <RadioGroup.Item value='outcome' asChild>
                <ButtonAtoms
                  onClick={() => handleSelected(selected)}
                  type='button'
                  $buttom={{
                    $selected: {
                      $disabled: !selected
                    },
                    $background: {
                      $color: {
                        $color: 'gray600',
                        $hover: 'gray600'
                      }
                    },
                    $colors: {
                      $color: {
                        $color: 'gray100',
                        $hover: 'gray100'
                      },
                      $icon: {
                        $color: 'red700',
                        $hover: 'red700'
                      }
                    },
                    $spacings: {
                      $mt: 2.4
                    },
                    $fonts: { $size: 1.6, $weigh: '700' },
                    $title: 'Saída',
                    $height: { $minHeight: 5.8 },
                    $icons: {
                      $type: 'ArrowCircleDown',
                      $size: 24
                    }
                  }}
                />
              </RadioGroup.Item>
            </HBoxAtoms>
          </RadioGroup.Root>
          <ButtonAtoms
            $buttom={{
              $background: {
                $color: {
                  $color: 'green700',
                  $hover: 'green500'
                }
              },
              $colors: {
                $color: {
                  $color: 'gray100',
                  $hover: 'gray100'
                }
              },
              $spacings: {
                $mt: 2.4
              },
              $fonts: { $size: 1.6, $weigh: '700' },
              $title: 'Cadastrar',
              $height: { $minHeight: 5.8 }
            }}
          />
        </FormAtoms>
      </VBoxAtoms>
    </>
  );
}
