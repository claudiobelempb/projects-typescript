import { BoxDefault } from 'components/common/BoxDefault';
import { HeadingDefault } from 'components/common/HeadingDefault';
import { TextDefault } from 'components/common/TextDefault';
import * as Styles from './styles';

export default function LayoutPricingTables() {
  return (
    <>
      <Styles.Container>
        <HeadingDefault as='h2'>Coding Pricing Tables</HeadingDefault>
        <Styles.Content>
          <Styles.Box>
            <div>
              <HeadingDefault background='gray900' as='h3'>
                Free Lite
              </HeadingDefault>
              <TextDefault>Its todaly free.</TextDefault>
            </div>
            <BoxDefault>
              <BoxDefault direction='row' gap={{ row: 1, unit: 'rem' }}>
                <h2>0$</h2>
                <h2>Free</h2>
              </BoxDefault>
              <TextDefault>One time payment</TextDefault>
              <Styles.Link
                title=' Current Plan'
                href='/'
                background='blue400'
              />
            </BoxDefault>

            <Styles.List>
              <li>
                <Styles.FaCheckIcon /> Up to 1 user
              </li>
              <li>
                <Styles.FaCheckIcon /> All UI Components
              </li>
              <li>
                <Styles.FaCheckIcon /> Lifetime Access
              </li>
              <li>
                <Styles.FaCheckIcon /> Free Updates
              </li>
              <li>
                <Styles.FaTimesIcon /> Community Support
              </li>
              <li>
                <Styles.FaTimesIcon /> Downloadatble Files
              </li>
            </Styles.List>
          </Styles.Box>
          <Styles.Box>
            <div>
              <HeadingDefault background='gray900' as='h3'>
                Stater
              </HeadingDefault>
              <TextDefault>Its todaly free.</TextDefault>
            </div>
            <BoxDefault>
              <BoxDefault direction='row' gap={{ row: 1, unit: 'rem' }}>
                <h2>39$</h2>
                <h2>29$</h2>
              </BoxDefault>
              <TextDefault>One time payment</TextDefault>
              <Styles.Link
                title=' Current Plan'
                href='/'
                background='gray900'
              />
            </BoxDefault>
            <Styles.List>
              <li>
                <Styles.FaCheckIcon /> Up to 1 user
              </li>
              <li>
                <Styles.FaCheckIcon /> All UI Components
              </li>
              <li>
                <Styles.FaCheckIcon /> Lifetime Access
              </li>
              <li>
                <Styles.FaCheckIcon /> Free Updates
              </li>
              <li>
                <Styles.FaTimesIcon /> Community Support
              </li>
              <li>
                <Styles.FaTimesIcon /> Downloadatble Files
              </li>
            </Styles.List>
          </Styles.Box>
          <Styles.Box>
            <div>
              <HeadingDefault background='gray900' as='h3'>
                Business
              </HeadingDefault>
              <TextDefault>Its todaly free.</TextDefault>
            </div>
            <BoxDefault>
              <BoxDefault direction='row' gap={{ row: 1, unit: 'rem' }}>
                <h2>59$</h2>
                <h2>99$</h2>
              </BoxDefault>
              <TextDefault>One time payment</TextDefault>
              <Styles.Link
                title=' Current Plan'
                href='/'
                background='gray900'
              />
            </BoxDefault>
            <Styles.List>
              <li>
                <Styles.FaCheckIcon /> Up to 1 user
              </li>
              <li>
                <Styles.FaCheckIcon /> All UI Components
              </li>
              <li>
                <Styles.FaCheckIcon /> Lifetime Access
              </li>
              <li>
                <Styles.FaCheckIcon /> Free Updates
              </li>
              <li>
                <Styles.FaTimesIcon /> Community Support
              </li>
              <li>
                <Styles.FaTimesIcon /> Downloadatble Files
              </li>
            </Styles.List>
          </Styles.Box>
          <Styles.Box>
            <div>
              <HeadingDefault background='gray900' as='h3'>
                Extended
              </HeadingDefault>
              <TextDefault>Its todaly free.</TextDefault>
            </div>
            <BoxDefault>
              <BoxDefault direction='row' gap={{ row: 1, unit: 'rem' }}>
                <h2>259$</h2>
                <h2>180$</h2>
              </BoxDefault>
              <TextDefault>One time payment</TextDefault>
              <Styles.Link
                title=' Current Plan'
                href='/'
                background='gray900'
              />
            </BoxDefault>
            <Styles.List>
              <li>
                <Styles.FaCheckIcon /> Up to 1 user
              </li>
              <li>
                <Styles.FaCheckIcon /> All UI Components
              </li>
              <li>
                <Styles.FaCheckIcon /> Lifetime Access
              </li>
              <li>
                <Styles.FaCheckIcon /> Free Updates
              </li>
              <li>
                <Styles.FaTimesIcon /> Community Support
              </li>
              <li>
                <Styles.FaTimesIcon /> Downloadatble Files
              </li>
            </Styles.List>
          </Styles.Box>
        </Styles.Content>
      </Styles.Container>
    </>
  );
}
