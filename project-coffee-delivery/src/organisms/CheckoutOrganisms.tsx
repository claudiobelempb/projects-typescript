import ImgCoffer from '@assets/coffer.svg';
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
import { HeaderMolecules } from '@molecules/HeaderMolecules';
export function CheckoutOrganisms() {
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
            <SkeletonLoadingAtoms $lines={1} $height={3} />
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
                <BoxAtoms $color={{ $text: 'yellow700' }}>
                  <IconAtom type='FaMapMarkerAlt' />
                </BoxAtoms>
                <TextAtoms $font={{ $fsize: 'm16' }}>
                  Endereço de Entrega
                </TextAtoms>
              </BoxAtoms>
              <TextAtoms $font={{ $fsize: 's14' }} $space={{ $ml: 'm24' }}>
                Informe o endereço onde deseja receber seu pedido
              </TextAtoms>
              <BoxAtoms
                $display='flex'
                $flex={{ $flexDirection: 'column', $gap: 1.6 }}
                $space={{ $mt: 'm24' }}
              >
                <InputAtoms
                  $background={{ $background: 'input' }}
                  $width={{ $maxWidth: 20 }}
                  placeholder='CEP'
                />

                <InputAtoms
                  $background={{ $background: 'input' }}
                  placeholder='Rua'
                />
                <BoxAtoms $flex={{ $flexDirection: 'row', $columnGap: 0.5 }}>
                  <InputAtoms
                    $background={{ $background: 'input' }}
                    placeholder='Número'
                  />
                  <InputAtoms
                    $background={{ $background: 'input' }}
                    placeholder='Complemento'
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
                  />
                  <InputAtoms
                    $background={{ $background: 'input' }}
                    placeholder='Cidade'
                    $width={{ $width: 100 }}
                  />
                  <InputAtoms
                    $background={{ $background: 'input' }}
                    $width={{ $maxWidth: 5 }}
                    placeholder='UF'
                  />
                </BoxAtoms>
              </BoxAtoms>
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
              <BoxAtoms
                // $background={{ $background: 'card' }}
                // $space={{ $py: 'l32' }}
                $flex={{
                  $flexDirection: 'row',
                  $justifyContent: 'space-between',
                  $alingItems: 'center',
                  $columnGap: 1
                }}
              >
                <ImageAtoms src={ImgCoffer} $width={{ $width: 6.4 }} />
                <BoxAtoms $width={{ $width: 100 }}>
                  <TextAtoms
                    $color={{ $text: 'subtitle' }}
                    $font={{ $fsize: 'm16' }}
                  >
                    Expresso Tradicional
                  </TextAtoms>
                  <BoxAtoms $flex={{ $flexDirection: 'row', $columnGap: 1 }}>
                    <BoxAtoms
                      $flex={{ $flexDirection: 'row' }}
                      $background={{ $background: 'button' }}
                    >
                      <ButtonAtoms
                        $height={{ $minHeight: 3 }}
                        $width={{ $minWidth: 3 }}
                        $background={{ $background: 'transparent' }}
                      >
                        <TextAtoms>-</TextAtoms>
                      </ButtonAtoms>
                      <TextAtoms>1</TextAtoms>
                      <ButtonAtoms
                        $height={{ $minHeight: 3 }}
                        $width={{ $minWidth: 3 }}
                        $background={{ $background: 'transparent' }}
                      >
                        <TextAtoms>+</TextAtoms>
                      </ButtonAtoms>
                    </BoxAtoms>
                    <ButtonAtoms
                      $background={{ $background: 'button' }}
                      $height={{ $maxHeight: 3.2 }}
                      $width={{ $minWidth: 7 }}
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
              </BoxAtoms>
              {/* SEPARATION */}
              <BoxAtoms
                $height={{ $minHeight: 0.2 }}
                $background={{ $background: 'button' }}
                $space={{ $mx: 'm16' }}
              />
              {/* CARD */}
              <BoxAtoms
                $flex={{
                  $flexDirection: 'row',
                  $justifyContent: 'space-between',
                  $alingItems: 'center'
                }}
              >
                <ImageAtoms src={ImgCoffer} $width={{ $width: 6.4 }} />
                <BoxAtoms $width={{ $width: 100 }}>
                  <TextAtoms
                    $color={{ $text: 'subtitle' }}
                    $font={{ $fsize: 'm16' }}
                  >
                    Expresso Tradicional
                  </TextAtoms>
                  <BoxAtoms $flex={{ $flexDirection: 'row', $columnGap: 1 }}>
                    <BoxAtoms
                      $flex={{ $flexDirection: 'row' }}
                      $background={{ $background: 'button' }}
                    >
                      <ButtonAtoms
                        $height={{ $minHeight: 3 }}
                        $width={{ $minWidth: 3 }}
                        $background={{ $background: 'transparent' }}
                      >
                        <TextAtoms>-</TextAtoms>
                      </ButtonAtoms>
                      <TextAtoms>1</TextAtoms>
                      <ButtonAtoms
                        $height={{ $minHeight: 3 }}
                        $width={{ $minWidth: 3 }}
                        $background={{ $background: 'transparent' }}
                      >
                        <TextAtoms>+</TextAtoms>
                      </ButtonAtoms>
                    </BoxAtoms>
                    <ButtonAtoms
                      $height={{ $maxHeight: 3.2 }}
                      $width={{ $minWidth: 7 }}
                      $background={{ $background: 'button' }}
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
                <BoxAtoms $flex={{ $alignSelf: 'flex-start' }}>
                  <TextAtoms
                    $color={{ $text: 'text' }}
                    $font={{ $fsize: 'm16', $fweigh: '700' }}
                    $text={{ $textAlign: 'end' }}
                  >
                    R$ 19,80
                  </TextAtoms>
                </BoxAtoms>
              </BoxAtoms>

              {/* SEPARATION */}
              <BoxAtoms
                $height={{ $minHeight: 0.2 }}
                $background={{ $background: 'button' }}
                $space={{ $mx: 'm16' }}
              />

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
                    R$ 29,70
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
                    R$ 3,50
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
                    R$ 33,20
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
