import Img01 from 'assets/images/css-grid/13.1.jpg';
import Img10 from 'assets/images/css-grid/13.10.jpg';
import Img02 from 'assets/images/css-grid/13.2.jpg';
import Img03 from 'assets/images/css-grid/13.3.jpg';
import Img04 from 'assets/images/css-grid/13.4.jpg';
import Img05 from 'assets/images/css-grid/13.5.jpg';
import Img06 from 'assets/images/css-grid/13.6.jpg';
import Img07 from 'assets/images/css-grid/13.7.jpg';
import Img08 from 'assets/images/css-grid/13.8.jpg';
import Img09 from 'assets/images/css-grid/13.9.jpg';
import * as Styles from './styles';
export default function LayoutGalleryGrid() {
  const date = [
    { date: '2023-07-01T20:09:25.321Z' },
    { date: '2040-07-01T20:09:25.321Z' },
    { date: '2032-07-01T20:09:25.321Z' },
    { date: '2023-07-01T20:09:25.321Z' },
    { date: '2002-07-01T20:09:25.321Z' },
    { date: '2001-07-04T12:08:56.235Z' }
  ];

  const result = date.map(item => {
    console.log(item.date);
    const maxDate = new Date(item.date).getTime();
    return Math.max(maxDate);
  });

  console.log(result[0]);

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Box
          gridcolumn={{ start: 1, end: 1 }}
          gridrow={{ start: 1, span: 'span', end: 2 }}
        >
          <img src={Img01} alt='' />
        </Styles.Box>

        <Styles.Box>
          <img src={Img02} alt='' />
        </Styles.Box>

        <Styles.Box
          gridcolumn={{ start: 4, end: -1 }}
          gridrow={{ start: 2, end: 3 }}
        >
          <img src={Img03} alt='' />
        </Styles.Box>

        <Styles.Box
          gridcolumn={{ start: 1, end: 2 }}
          gridrow={{ start: 3, end: 5 }}
        >
          <img src={Img04} alt='' />
        </Styles.Box>

        <Styles.Box
          gridcolumn={{ start: 2, span: 'span', end: 2 }}
          gridrow={{ start: 2, end: 3 }}
        >
          <img src={Img05} alt='' />
        </Styles.Box>

        <Styles.Box
          gridcolumn={{ start: 3, end: 5 }}
          gridrow={{ start: 1, end: 2 }}
        >
          <img src={Img06} alt='' />
        </Styles.Box>

        <Styles.Box>
          <img src={Img07} alt='' />
        </Styles.Box>

        <Styles.Box
          gridcolumn={{ start: 4, end: -1 }}
          gridrow={{ start: 3, end: 4 }}
        >
          <img src={Img08} alt='' />
        </Styles.Box>

        <Styles.Box
          gridcolumn={{ start: 2, end: 4 }}
          gridrow={{ start: 3, end: 5 }}
        >
          <img src={Img09} alt='' />
        </Styles.Box>

        <Styles.Box
          gridcolumn={{ start: 4, span: 'span', end: 2 }}
          gridrow={{ start: 4, end: 5 }}
        >
          <img src={Img10} alt='' />
        </Styles.Box>
      </Styles.Content>
    </Styles.Container>
  );
}
