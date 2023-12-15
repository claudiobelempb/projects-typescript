import { PencilLine } from '@phosphor-icons/react';
import ProfileImage from '../../assets/profile.svg';
import { AvatarAtoms } from './../../atoms/AvatarAtoms';
import { SeparationAtom } from './../../atoms/SeparationAtom';
import { BoxTemplates } from './../../templates/BoxTemplates';
import styles from './styles.module.css';

export function AsideMolecules() {
  return (
    <aside>
      <BoxTemplates
        maxWidth={16}
        borderRadius={8}
        marginTop={2}
        backgroundColor='#202024'
      >
        <BoxTemplates padding={2}>
          <div className={styles.contentProfile} style={{ marginTop: -5 }}>
            <AvatarAtoms isBorder src={ProfileImage} />
            <h2>Leslie Alexander</h2>
            <p>UI Designer</p>
          </div>
        </BoxTemplates>
        <SeparationAtom />
        <BoxTemplates padding={2}>
          <div className={styles.contentButton}>
            <button>
              <PencilLine size={20} />
              Editar seu perfil
            </button>
          </div>
        </BoxTemplates>
      </BoxTemplates>
    </aside>
  );
}
