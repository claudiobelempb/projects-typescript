import { appsignOut } from 'config/firebase/firebase.config';
import { UserContext } from 'contexts/user.context';
import { useContext } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { ReactComponent as CrwnLogo } from '../../assets/images/crown.svg';
import * as Styles from './styles';

export default function Header() {
  const { currentUser, setCurrentUse } = useContext(UserContext);

  const signOutHandler = async () => {
    await appsignOut();
    setCurrentUse(null);
  };

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Brand>
          <Styles.Link title='Home' href='/'>
            <CrwnLogo />
          </Styles.Link>
        </Styles.Brand>
        <Styles.ContentNavBar>
          <ul>
            <li>
              <Styles.Link title='Shop' href='/shop'>
                Shop
              </Styles.Link>
            </li>
            <li>
              <Styles.Link title='Contact' href={'/contact'}>
                Contact
              </Styles.Link>
            </li>
            <li>
              {currentUser ? (
                <Styles.Link title='Sing Oun' onClick={signOutHandler} href='/auth'>
                  Sing Out
                </Styles.Link>
              ) : (
                <Styles.Link title='Sing In' href='/auth'>
                  Sing In
                </Styles.Link>
              )}
            </li>
            <li>
              <Styles.Link title='Cart' href='/cart'>
                <FaShoppingBag />
              </Styles.Link>
            </li>
          </ul>
        </Styles.ContentNavBar>
      </Styles.Content>
    </Styles.Container>
  );
}
