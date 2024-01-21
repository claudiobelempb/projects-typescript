import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { FormAtoms } from '@atoms/FormAtoms';
import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { InputAtoms } from '@atoms/InputAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useState } from 'react';

import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { TransactionsContext } from '@contexts/TransactionsContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import * as zod from 'zod';

const NewTransactionSchema = zod.object({
  description: zod.string(),
  price: zod.number({
    required_error: 'Age is required',
    invalid_type_error: 'Age must be a number'
  }),
  category: zod.string(),
  type: zod.enum(['income', 'outcome'])
  // createdAt: zod.date()
});

export type NewTransactionFormData = zod.infer<typeof NewTransactionSchema>;

export function NewTransactionModalMolecules() {
  const [selected, setSelected] = useState(true);
  const [isLoading, setIsloading] = useState(false);

  const handleCreateTransaction = useContextSelector(
    TransactionsContext,
    contentx => {
      return contentx.handleCreateTransaction;
    }
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm<NewTransactionFormData>({
    resolver: zodResolver(NewTransactionSchema),
    defaultValues: {
      type: 'income'
    }
  });

  async function handleNewCreateTransaction(data: NewTransactionFormData) {
    setIsloading(true);
    const { description, category, price, type } = data;

    await handleCreateTransaction({
      description,
      category,
      price,
      type
    });
    reset();

    setIsloading(false);
  }

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
        <FormAtoms
          onSubmit={handleSubmit(handleNewCreateTransaction)}
          $flex={{ $rowGap: 1.6 }}
        >
          <InputAtoms
            $colors={{
              $input: { $colors: 'gray800' },
              $placeholder: { $colors: 'gray300' }
            }}
            type='text'
            placeholder='Descrição'
            required
            {...register('description')}
            $validation={{
              $mensagem: errors.description?.message,
              color: { $color: 'red700' }
            }}
          />
          <InputAtoms
            $colors={{
              $input: { $colors: 'gray800' },
              $placeholder: { $colors: 'gray300' }
            }}
            type='number'
            placeholder='Preço'
            required
            {...register('price', { valueAsNumber: true })}
          />
          <InputAtoms
            $colors={{
              $input: { $colors: 'gray800' },
              $placeholder: { $colors: 'gray300' }
            }}
            type='text'
            placeholder='Categria'
            required
            {...register('category')}
          />

          <Controller
            name='type'
            control={control}
            render={({ field }) => (
              <RadioGroup.Root onValueChange={field.onChange}>
                <HBoxAtoms $flex={{ $columnGap: 1 }}>
                  <>
                    <RadioGroup.Item
                      value='income'
                      asChild

                      // {...register('type', { value: 'income' })}
                    >
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
                    <RadioGroup.Item
                      value='outcome'
                      asChild
                      // {...register('type', { value: 'outcome' })}
                    >
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
                  </>
                </HBoxAtoms>
              </RadioGroup.Root>
            )}
          />
          {isLoading ? (
            <ButtonAtoms
              type='submit'
              $buttom={{
                $disabled: isLoading,
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

                $height: { $minHeight: 5.8 }
              }}
            >
              <LoadingAtoms $variant='medium' />
              {/* <SkeletonLoadingAtoms
                $lines={1}
                $spacings={{}}
                $height={{ $height: 5 }}
              /> */}
            </ButtonAtoms>
          ) : (
            <ButtonAtoms
              // disabled={isSubmitted}

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
          )}
        </FormAtoms>
      </VBoxAtoms>
    </>
  );
}
