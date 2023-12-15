import { BoxTemplates } from './../../templates/BoxTemplates';
import styles from './styles.module.css';

export function FormCommentMolecules({
  onSubmit,
  onChange,
  name,
  value,
  required,
  onInvalid,
  disabled
}) {
  return (
    <BoxTemplates>
      <form onSubmit={onSubmit} className={styles.containerForm}>
        <div className={styles.contentForm}>
          <h3>Deixe seu feedback</h3>

          <textarea
            name={name}
            value={value}
            onChange={onChange}
            id=''
            cols='30'
            rows='5'
            placeholder='Nossa, adorei amigo! Parabéns'
            required={required}
            onInvalid={onInvalid}
          ></textarea>

          <button disabled={disabled} type='submit'>
            Publicar
          </button>
        </div>
      </form>
    </BoxTemplates>
  );
}
