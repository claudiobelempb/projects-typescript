import * as Styles from './styles';

import Img01 from '../../assets/images/8.1.jpg';
import Img02 from '../../assets/images/8.2.jpg';
import Img03 from '../../assets/images/8.3.jpg';

export default function LayoutCardPersonal() {
  return (
    <main>
      <Styles.Container>
        <Styles.Box>
          <img loading='lazy' src={Img01} alt='' />
          <Styles.Infor>
            <p>Alice Lvy</p>
            <span>CEO</span>
          </Styles.Infor>
        </Styles.Box>
        <Styles.Box>
          <img loading='lazy' src={Img02} alt='' />
          <Styles.Infor>
            <p>Alex Lvy</p>
            <span>CFO</span>
          </Styles.Infor>
        </Styles.Box>
        <Styles.Box>
          <img loading='lazy' src={Img03} alt='' />
          <Styles.Infor>
            <p>Joy Lvy</p>
            <span>CMO</span>
          </Styles.Infor>
        </Styles.Box>
      </Styles.Container>
    </main>
  );
}
