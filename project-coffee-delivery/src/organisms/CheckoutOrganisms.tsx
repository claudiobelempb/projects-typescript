import { BoxAtoms } from '@atoms/BoxAtoms';
import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { ImageAtoms } from '@atoms/ImageAtoms';
import { InputAtoms } from '@atoms/InputAtoms';
import { SkeletonLoadingAtoms } from '@atoms/SkeletonLoadingAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { useCart } from '@hooks/useCard';
import { HeaderMolecules } from '@molecules/HeaderMolecules';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { coffees } from '../../data.json';

import { z } from 'zod';

type FormInputs = {
  cep: number;
  street: string;
  number: string;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: 'credit' | 'debit' | 'cash';
};

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento'
  })
});

export type OrderInfo = z.infer<typeof newOrder>;

const shippingPrice = 3.5;

export function CheckoutOrganisms() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem
  } = useCart();

  const coffeesInCart = cart?.map(item => {
    const coffeeInfo = coffees.find(coffee => coffee.id === item.id);

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.');
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity
    };
  });

  const totalItemsPrice = coffeesInCart?.reduce(
    (previousValue, currentItem) => {
      return (previousValue += currentItem.price * currentItem.quantity);
    },
    0
  );

  const {
    register,
    handleSubmit
    // watch,
    // formState: { errors }
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder)
  });

  // const selectedPaymentMethod = watch('paymentMethod');

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId);
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId);
  }

  function handleItemRemove(itemId: string) {
    removeItem(itemId);
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = data => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho');
    }

    checkout(data);
  };

  return (
    <>
      <ContainerAtoms>
        <HeaderMolecules />
      </ContainerAtoms>

      <ContainerAtoms $flex={{ $flexDirection: 'row' }}>
        <ContentAtoms
          // $space={{ $py: 'm24' }}
          $flex={{
            $flexDirection: 'row',
            $columnGap: 2,
            $justifyContent: 'center'
          }}
        >
          <BoxAtoms $width={{ $width: 60 }}>
            <HeadingAtoms
              $font={{ $fsize: 'm20', $fweigh: '700', $ffamily: 'Baloo' }}
              $color={{ $subtitle: 'subtitle' }}
            >
              Complete seu pedido
            </HeadingAtoms>

            <BoxAtoms
              $width={{ $width: 100 }}
              $background={{ $background: 'card' }}
              $space={{ $p: 'm24', $mt: 'm24' }}
              $border={{ $radius: { $borderWidth: 6 } }}
            >
              <BoxAtoms
                $flex={{
                  $flexDirection: 'row',
                  $columnGap: 0.5,
                  $alingItems: 'center'
                }}
              >
                <BoxAtoms
                  $color={{ $text: 'yellow700' }}
                  $width={{ $maxWidth: 2 }}
                >
                  <IconAtom type='FaMapMarkerAlt' />
                </BoxAtoms>
                <TextAtoms $font={{ $fsize: 'm16' }}>
                  Endereço de Entrega
                </TextAtoms>
              </BoxAtoms>
              <TextAtoms $font={{ $fsize: 's14' }} $space={{ $ml: 'm24' }}>
                Informe o endereço onde deseja receber seu pedido
              </TextAtoms>
              <form id='order' onSubmit={handleSubmit(handleOrderCheckout)}>
                <BoxAtoms
                  $display='flex'
                  $flex={{ $flexDirection: 'column', $gap: 1.6 }}
                  $space={{ $mt: 'm24' }}
                >
                  <InputAtoms
                    $background={{ $background: 'input' }}
                    $width={{ $maxWidth: 20 }}
                    placeholder='CEP'
                    type='number'
                    {...register('cep', { valueAsNumber: true })}
                  />

                  <InputAtoms
                    $background={{ $background: 'input' }}
                    placeholder='Rua'
                    {...register('street')}
                  />
                  <BoxAtoms $flex={{ $flexDirection: 'row', $columnGap: 0.5 }}>
                    <InputAtoms
                      $background={{ $background: 'input' }}
                      placeholder='Número'
                      type='number'
                      {...register('number')}
                    />
                    <InputAtoms
                      $background={{ $background: 'input' }}
                      placeholder='Complemento'
                      {...register('fullAddress')}
                    />
                  </BoxAtoms>
                  <BoxAtoms
                    $flex={{ $flexDirection: 'row', $columnGap: 0.5 }}
                    $width={{ $width: 100 }}
                  >
                    <InputAtoms
                      $background={{ $background: 'input' }}
                      placeholder='Bairro'
                      $width={{ $width: 100 }}
                      {...register('neighborhood')}
                    />
                    <InputAtoms
                      $background={{ $background: 'input' }}
                      placeholder='Cidade'
                      $width={{ $width: 100 }}
                      {...register('city')}
                    />
                    <InputAtoms
                      $background={{ $background: 'input' }}
                      $width={{ $maxWidth: 5 }}
                      placeholder='UF'
                      {...register('state')}
                    />
                  </BoxAtoms>
                </BoxAtoms>
              </form>
            </BoxAtoms>
            <BoxAtoms
              $width={{ $width: 100 }}
              $background={{ $background: 'card' }}
              $space={{ $p: 'm24', $mt: 'm24', $mx: 'm24' }}
              $border={{ $radius: { $borderWidth: 6 } }}
              $flex={{ $rowGap: 2 }}
            >
              <BoxAtoms>
                <BoxAtoms
                  $flex={{
                    $flexDirection: 'row',
                    $alingItems: 'center',
                    $columnGap: 1
                  }}
                >
                  <IconAtom />
                  <TextAtoms
                    $color={{ $subtitle: 'subtitle' }}
                    $font={{ $fsize: 'm16', $fweigh: '700' }}
                  >
                    Pagamento
                  </TextAtoms>
                </BoxAtoms>

                <TextAtoms
                  $color={{ $subtitle: 'subtitle' }}
                  $font={{ $fsize: 's14' }}
                  $space={{ $ml: 'm24' }}
                >
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </TextAtoms>
              </BoxAtoms>
              <BoxAtoms
                $flex={{
                  $flexDirection: 'row',
                  $justifyContent: 'center',
                  $columnGap: 1
                }}
              >
                <ButtonAtoms
                  $width={{ $width: 100 }}
                  $space={{ $p: 's8' }}
                  $flex={{ $justifyContent: 'center' }}
                  $background={{ $background: 'button', $hover: 'purple700' }}
                  $height={{ $minHeight: 5 }}
                >
                  <IconAtom />
                  <TextAtoms
                    $text={{ $textTransform: 'uppercase' }}
                    $color={{ $button: 'button' }}
                    $font={{ $fsize: 's12' }}
                  >
                    Cartão de crédito
                  </TextAtoms>
                </ButtonAtoms>
                <ButtonAtoms
                  $space={{ $p: 's8' }}
                  $flex={{ $justifyContent: 'center' }}
                  $background={{ $background: 'button', $hover: 'purple700' }}
                  $height={{ $minHeight: 5 }}
                  $width={{ $width: 100 }}
                >
                  <IconAtom />
                  <TextAtoms
                    $text={{ $textTransform: 'uppercase' }}
                    $color={{ $button: 'button' }}
                    $font={{ $fsize: 's12' }}
                  >
                    cartão de débito
                  </TextAtoms>
                </ButtonAtoms>
                <ButtonAtoms
                  $flex={{ $justifyContent: 'center' }}
                  $background={{ $background: 'button', $hover: 'purple700' }}
                  $height={{ $minHeight: 5 }}
                  $space={{ $p: 's8' }}
                  $width={{ $width: 100 }}
                >
                  <IconAtom />
                  <TextAtoms
                    $text={{ $textTransform: 'uppercase' }}
                    $color={{ $button: 'button' }}
                    $font={{ $fsize: 's12' }}
                  >
                    dinheiro
                  </TextAtoms>
                </ButtonAtoms>
              </BoxAtoms>
            </BoxAtoms>
          </BoxAtoms>
          <BoxAtoms $space={{ $mb: 'l32' }}>
            <HeadingAtoms
              $font={{
                $fsize: 'm20',
                $fweigh: '700',
                $ffamily: 'Baloo'
              }}
              $color={{ $subtitle: 'subtitle' }}
              $space={{ $mb: 'm16' }}
            >
              Cafés selecionados
            </HeadingAtoms>

            <BoxAtoms
              $background={{ $background: 'card' }}
              $space={{ $p: 'l32' }}
              $border={{
                $radiusTopRight: { $width: 6 },
                $radiusBottomLeft: { $width: 6 }
              }}
              $flex={{ $rowGap: 1 }}
            >
              {/* CARD */}
              {isLoading ? (
                <SkeletonLoadingAtoms $lines={1} $height={{ $height: 5 }} />
              ) : (
                <>
                  {coffeesInCart?.map(coffee => (
                    <>
                      <BoxAtoms
                        $flex={{
                          $flexDirection: 'row',
                          $justifyContent: 'space-between',
                          $alingItems: 'center',
                          $columnGap: 1
                        }}
                        key={coffee.id}
                      >
                        <ImageAtoms
                          src={coffee.image}
                          alt={coffee.title}
                          $width={{ $width: 6.4 }}
                        />
                        <BoxAtoms $width={{ $width: 100 }}>
                          <TextAtoms
                            $color={{ $text: 'subtitle' }}
                            $font={{ $fsize: 'm16' }}
                          >
                            Expresso Tradicional
                          </TextAtoms>
                          <BoxAtoms
                            $flex={{ $flexDirection: 'row', $columnGap: 1 }}
                          >
                            <BoxAtoms
                              $flex={{
                                $flexDirection: 'row',
                                $alingItems: 'center'
                              }}
                              $background={{ $background: 'button' }}
                            >
                              <ButtonAtoms
                                $height={{ $minHeight: 3 }}
                                $width={{ $minWidth: 3 }}
                                $background={{ $background: 'transparent' }}
                                onClick={() => handleItemDecrement(coffee.id)}
                              >
                                <TextAtoms>-</TextAtoms>
                              </ButtonAtoms>
                              <TextAtoms $font={{ $fsize: 'm16' }}>
                                {coffee.quantity}
                              </TextAtoms>
                              <ButtonAtoms
                                $height={{ $minHeight: 3 }}
                                $width={{ $minWidth: 3 }}
                                $background={{ $background: 'transparent' }}
                                onClick={() => handleItemIncrement(coffee.id)}
                              >
                                <TextAtoms>+</TextAtoms>
                              </ButtonAtoms>
                            </BoxAtoms>
                            <ButtonAtoms
                              $background={{ $background: 'button' }}
                              $height={{ $maxHeight: 3.2 }}
                              $width={{ $minWidth: 7 }}
                              onClick={() => handleItemRemove(coffee.id)}
                            >
                              <TextAtoms
                                $color={{ $text: 'text' }}
                                $font={{ $fsize: 's12' }}
                                $text={{ $textTransform: 'uppercase' }}
                              >
                                Remover
                              </TextAtoms>
                            </ButtonAtoms>
                          </BoxAtoms>
                        </BoxAtoms>
                        <BoxAtoms
                          $flex={{
                            $justifyContent: 'flex-end',
                            $alignSelf: 'flex-start'
                          }}
                        >
                          <TextAtoms
                            $color={{ $text: 'text' }}
                            $font={{ $fsize: 'm16', $fweigh: '700' }}
                            $text={{ $textAlign: 'end' }}
                          >
                            R$ 19,80
                          </TextAtoms>
                        </BoxAtoms>
                        {/* SEPARATION */}
                      </BoxAtoms>
                      <BoxAtoms
                        $height={{ $minHeight: 0.2 }}
                        $background={{ $background: 'button' }}
                        $space={{ $mx: 'm16', $mt: 'l30' }}
                      />
                    </>
                  ))}
                </>
              )}

              <BoxAtoms $flex={{ $rowGap: 1 }}>
                <BoxAtoms
                  $flex={{
                    $flexDirection: 'row',
                    $justifyContent: 'space-between'
                  }}
                >
                  <TextAtoms
                    $color={{ $text: 'text' }}
                    $font={{ $fsize: 's14' }}
                  >
                    Total de itens
                  </TextAtoms>
                  <TextAtoms
                    $color={{ $text: 'text' }}
                    $font={{ $fsize: 'm16' }}
                  >
                    {new Intl.NumberFormat('pt-br', {
                      currency: 'BRL',
                      style: 'currency'
                    }).format(totalItemsPrice)}
                  </TextAtoms>
                </BoxAtoms>
                <BoxAtoms
                  $flex={{
                    $flexDirection: 'row',
                    $justifyContent: 'space-between'
                  }}
                >
                  <TextAtoms
                    $color={{ $text: 'text' }}
                    $font={{ $fsize: 's14' }}
                  >
                    Entrega
                  </TextAtoms>
                  <TextAtoms
                    $color={{ $text: 'text' }}
                    $font={{ $fsize: 'm16' }}
                  >
                    {new Intl.NumberFormat('pt-br', {
                      currency: 'BRL',
                      style: 'currency'
                    }).format(shippingPrice)}
                  </TextAtoms>
                </BoxAtoms>
                <BoxAtoms
                  $flex={{
                    $flexDirection: 'row',
                    $justifyContent: 'space-between'
                  }}
                >
                  <TextAtoms
                    $color={{ $text: 'subtitle' }}
                    $font={{ $fsize: 'm20', $fweigh: '700' }}
                  >
                    Total
                  </TextAtoms>
                  <TextAtoms
                    $color={{ $text: 'subtitle' }}
                    $font={{ $fsize: 'm20', $fweigh: '700' }}
                  >
                    {totalItemsPrice}
                  </TextAtoms>
                </BoxAtoms>
                <BoxAtoms $space={{ $mt: 'm24' }}>
                  <ButtonAtoms
                    $height={{ $minHeight: 5.6 }}
                    $background={{
                      $background: 'yellow500',
                      $hover: 'yellow700'
                    }}
                  >
                    <TextAtoms
                      $color={{ $text: 'white' }}
                      $font={{ $fweigh: '700', $fsize: 's14' }}
                      $text={{ $textTransform: 'uppercase' }}
                    >
                      confirmar pedido
                    </TextAtoms>
                  </ButtonAtoms>
                </BoxAtoms>
              </BoxAtoms>
            </BoxAtoms>
          </BoxAtoms>
        </ContentAtoms>
      </ContainerAtoms>
    </>
  );
}
