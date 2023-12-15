import Img01 from 'assets/images/css-grid/2.1.jpg';
import Img02 from 'assets/images/css-grid/2.2.jpg';
import Img03 from 'assets/images/css-grid/2.3.jpg';
import Img04 from 'assets/images/css-grid/2.4.jpg';
import * as Styles from './styles';
export default function LayoutGallery() {
  return (
    <Styles.Container as='main'>
      <Styles.Content as='section'>
        <Styles.Box url={Img01}></Styles.Box>
        <Styles.Box url={Img02}></Styles.Box>
        <Styles.Box url={Img03}></Styles.Box>
        <Styles.Box url={Img04}></Styles.Box>
      </Styles.Content>
    </Styles.Container>
  );
}
