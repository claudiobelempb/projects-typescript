import * as Styles from './styles';

import Img01 from '../../assets/images/12.1.jpg';
import Img02 from '../../assets/images/12.2.jpg';
import Img03 from '../../assets/images/12.3.jpg';
import Img04 from '../../assets/images/12.4.jpg';
import Img05 from '../../assets/images/12.5.jpg';
export default function LayoutResponsiveGallery() {
  return (
    <Styles.Container>
      <h1>LayoutResponsiveGallery</h1>
      <section>
        <figure>
          <img src={Img01} alt='' />
        </figure>
        <figure>
          <img src={Img02} alt='' />
        </figure>
        <figure>
          <img src={Img03} alt='' />
        </figure>
        <figure>
          <img src={Img04} alt='' />
        </figure>
        <figure>
          <img src={Img05} alt='' />
        </figure>
      </section>
    </Styles.Container>
  );
}
