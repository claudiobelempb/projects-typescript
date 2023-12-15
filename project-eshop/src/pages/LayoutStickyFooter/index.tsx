import * as Styles from './styles';

export default function LayoutStickyFooter() {
  return (
    <Styles.Container as='main'>
      <Styles.Container as='header' backgroundColor='blue500'>
        <Styles.Content>
          <Styles.Box>
            <h1>Layout Header</h1>
          </Styles.Box>
        </Styles.Content>
      </Styles.Container>
      <Styles.Container backgroundColor='orange500' as='section'>
        <Styles.Content>
          <Styles.Box>
            <h1>Layout Sticky Footer</h1>
          </Styles.Box>
        </Styles.Content>
      </Styles.Container>
      <Styles.Container as='footer' backgroundColor='red500'>
        <Styles.Content>
          <Styles.Box>
            <h1>Layout Footer</h1>
          </Styles.Box>
        </Styles.Content>
      </Styles.Container>
    </Styles.Container>
  );
}
