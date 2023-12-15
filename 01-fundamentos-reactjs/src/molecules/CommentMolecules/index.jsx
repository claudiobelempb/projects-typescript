import { BoxTemplates } from './../../templates/BoxTemplates';
import styles from './styles.module.css';

export function CommentMolecules() {
  return (
    <BoxTemplates>
      <article className={styles.container}>
        <span className={styles.contentSpan}></span>

        <div className={styles.contentForm}>
          <h3>Deixe seu feedback</h3>

          <textarea
            name=''
            id=''
            cols='30'
            rows='6'
            placeholder='Nossa, adorei amigo! Parabéns'
          ></textarea>

          <div className={styles.contentFormButton}>
            <button>Publicar</button>
          </div>
        </div>
      </article>
    </BoxTemplates>
  );
}
