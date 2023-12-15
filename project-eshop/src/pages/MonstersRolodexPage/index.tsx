import { AppLoadingSpinner } from 'components/AppLoadingSpinner';
import { CardList } from 'components/card-list';
import { SearchBox } from 'components/search-box';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import * as Styles from './styles';

type Monster = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

export type Monsters = {
  monsters: Monster[];
};

export default function MonstersRolodexPage() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMosnters, setFilteredMosnters] = useState(monsters);
  const [isLoading, setIsLoading] = useState(false);

  console.log('render');
  const onSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => setMonsters(user))
      .catch(() => {});
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMosnters(newFilteredMonster);
  }, [monsters, searchField]);

  return (
    <Styles.Container>
      <Styles.Title textcolor='white' fontFamily='title' as='h1'>
        Monsters Rolodex
      </Styles.Title>
      <Styles.Content>
        <SearchBox onChange={event => onSearchChange(event)} />
        {isLoading ? (
          <CardList monsters={filteredMosnters} />
        ) : (
          <>
            <AppLoadingSpinner />
          </>
        )}
      </Styles.Content>
    </Styles.Container>
  );
}

// class MonstersRolodexPage extends Component {
//   render(): ReactNode {
//     return (
//       <>
//         <Styles.Container>
//           <h1>Monsters Rolodex Page</h1>
//         </Styles.Container>
//       </>
//     );
//   }
// }

// export { MonstersRolodexPage };
