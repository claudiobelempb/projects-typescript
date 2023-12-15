import { Monsters } from 'pages/MonstersRolodexPage';
import * as Styles from './styles';

export const CardList = ({ monsters }: Monsters) => {
  return (
    <Styles.Container>
      <Styles.Content>
        {monsters.map(monster => {
          const { id, name, email } = monster;
          return (
            <Styles.Box key={monster.id}>
              <div>
                <img
                  src={`https://robohash.org/${id}?set=set2&size=180x180`}
                  alt={name}
                />
              </div>
              <h2>{name}</h2>
              <p>{email}</p>
            </Styles.Box>
          );
        })}
      </Styles.Content>
    </Styles.Container>
  );
};
